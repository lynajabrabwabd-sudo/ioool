var cards=document.querySelectorAll('.card');
document.getElementById('tabs').addEventListener('click',function(e){
  var b=e.target.closest('button'); if(!b) return;
  document.querySelectorAll('#tabs button').forEach(function(x){x.classList.toggle('on',x===b)});
  cards.forEach(function(c){c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f)});
});
var lb=document.getElementById('lb'),lbi=document.getElementById('lbi');
document.querySelectorAll('.im img').forEach(function(i){i.addEventListener('click',function(){lbi.src=i.src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
