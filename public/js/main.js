console.log('888台灣商店前台已載入');

(function(){
  const search = document.getElementById('productSearch');
  if (!search) return;
  const items = Array.from(document.querySelectorAll('.bj-item'));
  const empty = document.getElementById('searchEmpty');
  search.addEventListener('input', function(){
    const keyword = this.value.trim().toLowerCase();
    let visible = 0;
    items.forEach(item => {
      const text = `${item.dataset.name || ''} ${item.dataset.desc || ''} ${item.dataset.cat || ''}`.toLowerCase();
      const match = !keyword || text.includes(keyword);
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (empty) empty.style.display = visible ? 'none' : 'block';
  });
})();


// 商品列表 / 商品詳細頁：+1 / -1 數量控制
(function(){
  document.querySelectorAll('.qty-stepper').forEach(stepper => {
    const input = stepper.querySelector('.qty-input');
    const minus = stepper.querySelector('.qty-minus');
    const plus = stepper.querySelector('.qty-plus');
    if (!input || !minus || !plus) return;

    function maxValue(){
      const fromInput = parseInt(input.getAttribute('max') || '9999', 10);
      const fromBox = parseInt(stepper.dataset.max || String(fromInput), 10);
      return Math.max(1, Number.isFinite(fromInput) ? fromInput : fromBox || 9999);
    }
    function clamp(value){
      const max = maxValue();
      const n = parseInt(value || '1', 10);
      return Math.min(Math.max(Number.isFinite(n) ? n : 1, 1), max);
    }
    function setQty(value){ input.value = clamp(value); }

    minus.addEventListener('click', () => setQty(Number(input.value || 1) - 1));
    plus.addEventListener('click', () => setQty(Number(input.value || 1) + 1));
    input.addEventListener('change', () => setQty(input.value));
  });
})();
