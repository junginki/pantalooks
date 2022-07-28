//약식 준비핸들러
$(function() {
	const $slides = $('.slides > .slides-container > p');
	// const $bar = $('.progress>.bar');
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');
	const $top = $('ul.top > li > a');

	const $btnAuto = $('.btn_auto');

	let intervalKey = null;

	let nowIdx = null;
	const arrVal = [0];

	const pageMove = function(arrVal){
		$('html , body').animate({
			scrollTop:arrVal[0]
		})
	}
$top.on('click' , function(evt){
	evt.preventDefault();
	pageMove(arrVal);

})



	//초기화 작업 
	$slides.eq(nowIdx).show();
	$indicator.eq(nowIdx).parent().addClass('on');
	nowIdx = $indicator.index(this);
	const fadeFn = function(){
		//인디케이터 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//슬라이드 처리
		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
	};

	//인디케이 터에 대한 클릭이벤트
	$indicator.on('click', function(evt){
		evt.preventDefault();
		
		//nowIdx 추출
		nowIdx = $indicator.index(this);

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt){
		evt.preventDefault();

		if(nowIdx<$indicator.length-1){
			nowIdx++;
		}else{
			nowIdx = 0;
		}

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출
		
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt){
		evt.preventDefault();
		
		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx = $indicator.length-1;			
		}

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출

	});

	//원버튼 자동재생
	$btnAuto.on('click', function(){
		if($(this).hasClass('pause')){//진행중....
			//1. pause 클래스 제거
			$(this).removeClass('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);

		}else{//멈춰진 상태....

			$btnAuto.addClass('pause');

			intervalKey = setInterval(function(){
				$btnNext.trigger('click');
			},2000);
		}
	});

// -----------slide 2번----------------


	const $business = $('.flex_container__box2__box1>p:nth-child(3)>a')
	const $business_2 = $('.flex_container__box2__box1>p:nth-child(4)>a')


	$business.on('click' , function(evt){
	evt.preventDefault()
	let imageUrl = "./images/main_business_img01.jpg";
	let imageUrl_2 = "./images/Display.png";
	$(this).parent().addClass('on_blue').siblings().removeClass('on_blue');//활성화표시
	$(".flex_container__box1").css("background-image", "url(" + imageUrl + ")");
	$(".flex_container__box2__box2").css("background-image", "url(" + imageUrl_2 + ")");
})


$business_2.on('click' , function(evt){
	evt.preventDefault()
	let imageUrl = "./images/main_business_img02.jpg";
	let imageUrl_2 = "./images/Display2.png";
	$(this).parent().addClass('on_blue').siblings().removeClass('on_blue');
        $(".flex_container__box1").css("background-image", "url(" + imageUrl + ")");
				$(".flex_container__box2__box2").css("background-image", "url(" + imageUrl_2 + ")"); 
})









// ---------------------슬라이드 3번-------------------
// const $slides_2 = $('slides_2 >.slides-container_2>p')
// const $btnPrev_2 = $('.prev_2');
// const $btnNext_2 = $('.nex2');
// for(let i = 0 ;i <$slides_2.length; i++ )
// $slides_2.eq(i).show();
// $btnNext_2.on('click', function(evt){
// 	evt.preventDefault();
// 	// alert('클릭성공')
// 	$slides_2.eq(i).fadeIn(1000).siblings().fadeOut(1000);
// 	$slides_2.eq(i).parent().addClass('on').siblings().removeClass('on');

// });

//실험_1-------

  let $slider = $('.slider'),
      $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
      .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide(){ // 이전버튼 함수
    stopSlide();startSlide(); //타이머 초기화
    //  $lastSlide = $slider.find('li').last() .prependTo($slider); //마지막 슬라이드 //마지막 슬라이드를 맨 앞으로 보내기  
		$firstSlide = $slider.find('li').first().appendTo($slider);
		$secondSlide = $slider.find('li').eq(0).stop(true).animate({'opacity':0},400);
    $secondSlide = $slider.find('li').eq(1).stop(true).animate({'opacity':0},400);//두 번째 슬라이드 구하기   //밀려난 두 번째 슬라이드는 fadeOut 시키고
		$secondSlide = $slider.find('li').eq(2).stop(true).animate({'opacity':0},400);//세 번째 슬라이드 구하기   //...
		$secondSlide = $slider.find('li').eq(3).stop(true).animate({'opacity':0},400);//네 번째 슬라이드 구하기   //...
		$secondSlide = $slider.find('li').eq(4).stop(true).animate({'opacity':0},400);//다섯 번째 슬라이드 구하기 //...
    $firstSlide = $slider.find('li').first() .stop(true).animate({'opacity':1},400); //맨 처음 슬라이드 다시 구하기//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }
  
  function NextSlide(){ // 다음 버튼 함수
    stopSlide();startSlide(); //타이머 초기화
    $firstSlide = $slider.find('li').first().appendTo($slider); // 첫 번째 슬라이드 // 맨 마지막으로 보내기
		$secondSlide = $slider.find('li').eq(1).stop(true).animate({'opacity':0},400);
		$secondSlide = $slider.find('li').eq(2).stop(true).animate({'opacity':0},400);
		$secondSlide = $slider.find('li').eq(3).stop(true).animate({'opacity':0},400);
		$secondSlide = $slider.find('li').eq(4).stop(true).animate({'opacity':0},400);
     $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},400); // fadeOut시키기
    $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},400);// fadeIn 시키기
  }


   //다음버튼 클릭
  $('.nex2').on('click', function(evt){
		evt.preventDefault();
    NextSlide();
  });
	//이전 버튼 클릭
  $('.prev_2').on('click', function(evt){ 
		evt.preventDefault()
    PrevSlide();
  });

  

  let theInterval_1 =null

  function startSlide() {
    theInterval_1 = setInterval(NextSlide, 4000); //자동 슬라이드 설정
  }


  function stopSlide() { //자동 멈추기
    clearInterval(theInterval_1);
  }
  
  $('.slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
    stopSlide();   //마우스 진입
  }, function (){
    startSlide(); //마우스 떠남

  });
	
	startSlide(); // 자동 슬라이드 시작


// --실험2--

	
  let $clientslider = $('.article_client_slide__container__slider'),
      $first_client_slider = $clientslider.find('li').first() .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기 // 첫번째 슬라이드

  function Prevclient(){ // 이전버튼 함수
		clients_stopSlide();clients_startSlide(); //타이머 초기화
    //  $lastSlide = $slider.find('li').last() .prependTo($slider); //마지막 슬라이드 //마지막 슬라이드를 맨 앞으로 보내기  
		$first_client_slider = $clientslider.find('li').first().appendTo($clientslider);
		$secondSlide_client_slider =$clientslider.find('li').eq(0).stop(true).animate({'opacity':0},400);
    $secondSlide_client_slider =$clientslider.find('li').eq(1).stop(true).animate({'opacity':0},400);//두 번째 슬라이드 구하기   //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $first_client_slider = $clientslider.find('li').first() .stop(true).animate({'opacity':1},400); //맨 처음 슬라이드 다시 구하기//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }
  
  function Nextclient(){ // 다음 버튼 함수
    clients_stopSlide();clients_startSlide(); //타이머 초기화
		$first_client_slider = $clientslider.find('li').first().appendTo($clientslider);
		$secondSlide_client_slider = $clientslider.find('li').eq(1).stop(true).animate({'opacity':0},400);
		
     $last_client_slider = $clientslider.find('li').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},400); // fadeOut시키기
    $last_client_slider = $clientslider.find('li').first()// 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},400);// fadeIn 시키기
  }
  
  $('.client_right').on('click', function(evt){
		evt.preventDefault(); //다음버튼 클릭
    Nextclient();
  });
  $('.client_left').on('click', function(evt){ 
		evt.preventDefault()//이전 버튼 클릭
		Prevclient();
  });

  
  let theInterval =null;

  function clients_startSlide() {
    theInterval = setInterval( Nextclient, 4000); //자동 슬라이드 설정
  }

  function clients_stopSlide() { //자동 멈추기
    clearInterval(theInterval);
  }
  
  $('.article_client_slide__container__slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
    clients_stopSlide();
  }, function (){
		clients_startSlide();
  });
  clients_startSlide(); // 자동 슬라이드 시작





















});




