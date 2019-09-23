 $(document).ready(function() { 
 var length, 
  currentIndex = 0, 
  interval, 
  hasStarted = false, //�Ƿ��Ѿ���ʼ�ֲ� 
  t = 5000; //�ֲ�ʱ���� 
 length = $('.slider-panel').length; 
 //�����˵�һ��ͼƬ���� 
 $('.slider-panel:not(:first)').hide(); 
 //����һ��slider-item��Ϊ����״̬ 
 $('.slider-item:first').addClass('slider-item-selected'); 
 //������ǰ����󷭰�ť 
 $('.slider-page').hide(); 
 //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ���� 
 $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
  stop(); 
  $('.slider-page').show(); 
 }, function() { 
  $('.slider-page').hide(); 
  start(); 
 }); 
 $('.slider-item').hover(function(e) { 
  stop(); 
  var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
  currentIndex = $(this).index(); 
  play(preIndex, currentIndex); 
 }, function() { 
  start(); 
 }); 
 $('.slider-pre').unbind('click'); 
 $('.slider-pre').bind('click', function() { 
  pre(); 
 }); 
 $('.slider-next').unbind('click'); 
 $('.slider-next').bind('click', function() { 
  next(); 
 }); 
 /** 
  * ��ǰ��ҳ 
  */
 function pre() { 
  var preIndex = currentIndex; 
  currentIndex = (--currentIndex + length) % length; 
  play(preIndex, currentIndex); 
 } 
 /** 
  * ���ҳ 
  */
 function next() { 
  var preIndex = currentIndex; 
  currentIndex = ++currentIndex % length; 
  play(preIndex, currentIndex); 
 } 
 /** 
  * ��preIndexҳ����currentIndexҳ 
  * preIndex ��������ҳ����ʼҳ 
  * currentIndex ��������������ҳ 
  */
 function play(preIndex, currentIndex) { 
  $('.slider-panel').eq(preIndex).fadeOut(500) 
  .parent().children().eq(currentIndex).fadeIn(1000); 
  $('.slider-item').removeClass('slider-item-selected'); 
  $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
 } 
 /** 
  * ��ʼ�ֲ� 
  */
 function start() { 
  if(!hasStarted) { 
  hasStarted = true; 
  interval = setInterval(next, t); 
  } 
 } 
 /** 
  * ֹͣ�ֲ� 
  */
 function stop() { 
  clearInterval(interval); 
  hasStarted = false; 
 } 
 //��ʼ�ֲ� 
 start(); 
 }); 