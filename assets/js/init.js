!function($){"use strict";$("body:not(.page-loader-disable)").jpreLoader({showSplash:!1,loaderVPos:"50%"}),$.fn.exists=function(){return this.length>0};var e=$("body").attr("class"),t="#ffdc11",a=$(".main-nav"),s=$(".circular__bar"),i=$(".gm-map"),o=$(".mp_single-img"),r=$(".mp_gallery"),l=$(".mp_iframe"),n=$(".post-grid--fitRows"),d=$(".post-grid--masonry"),c=$(".post-grid--masonry-filter"),p=$(".album"),f=$(".posts--slider-featured"),g=$(".featured-carousel"),y=$(".video-carousel"),u=$(".team-roster--slider"),m=$(".awards--slider"),h=$(".player-info"),b=$(".product__slider"),_=$(".product__slider-soccer"),v=$(".team-roster--card-slider"),k=$(".team-roster--case-slider"),w=$(".hero-slider"),T=$(".posts--slider-top-news"),S=$(".posts--slider-var-width"),C=$("#games-history"),x=$("#games-history-soccer"),F=$("#points-history"),M=$("#points-history-soccer"),B=$("#points-history-football"),A=$("#player-stats"),L=$(".content-filter"),i=$(".gm-map"),H=$(".marquee"),z=$("#slider-range"),W=$("#instagram-feed"),P=$("#instagram-feed-alt"),R=$(".widget-social");"template-soccer"==e?t="#1892ed":"template-football"==e&&(t="#f92552");var O={initialize:function(){this.SvgPolyfill(),this.headerNav(),this.countDown(),this.circularBar(),this.MagnificPopup(),this.isotope(),this.SlickCarousel(),this.ContentFilter(),this.ChartJs(),this.RangeSlider(),this.GoogleMap(),this.InstagramFeed(),this.SocialCounters(),this.miscScripts()},SvgPolyfill:function(){svg4everybody()},headerNav:function(){if(a.exists()){var e=$(".nav-account"),t=$(".nav-account > li"),s=$(".social-links--main-nav"),i=$(".info-block--header > li"),o=$(".site-wrapper"),r=$(".main-nav__list"),l=$(".main-nav__list > li"),n=$("#header-mobile__toggle"),d=$(".pushy-panel__toggle"),c=$(".header-search-form").clone();$("#header-mobile").append(c);if($(".info-block__item--shopping-cart > .info-block__link-wrapper").clone().appendTo(r).wrap('<li class="main-nav__item--shopping-cart"></li>'),e.exists()){var p=e.children().clone();r.append(p)}var f=$(".header-mobile__logo").clone();r.prepend(f),f.prepend('<span class="main-nav__back"></span>');var g=$(".info-block__item--contact-primary").clone(),y=$(".info-block__item--contact-secondary").clone();if(r.append(g).append(y),s.exists()){s.children().clone().contents().unwrap().appendTo(r).wrapAll('<li class="main-nav__item--social-links"></li>')}t.has("ul").addClass("has-children"),i.has("ul").addClass("has-children"),n.on("click",function(){o.toggleClass("site-wrapper--has-overlay")}),$(".site-overlay, .main-nav__back").on("click",function(){o.toggleClass("site-wrapper--has-overlay")}),d.on("click",function(e){e.preventDefault(),o.toggleClass("site-wrapper--has-overlay-pushy")}),$(".site-overlay, .pushy-panel__back-btn").on("click",function(e){e.preventDefault(),o.removeClass("site-wrapper--has-overlay-pushy site-wrapper--has-overlay")}),l.has(".main-nav__sub").addClass("has-children").prepend('<span class="main-nav__toggle"></span>'),l.has(".main-nav__megamenu").addClass("has-children").prepend('<span class="main-nav__toggle"></span>'),$(".main-nav__toggle").on("click",function(){$(this).toggleClass("main-nav__toggle--rotate").parent().siblings().children().removeClass("main-nav__toggle--rotate"),$(".main-nav__sub, .main-nav__megamenu").not($(this).siblings(".main-nav__sub, .main-nav__megamenu")).slideUp("normal"),$(this).siblings(".main-nav__sub").slideToggle("normal"),$(this).siblings(".main-nav__megamenu").slideToggle("normal")}),$(".main-nav__list > li > ul > li").has(".main-nav__sub-2").addClass("has-children").prepend('<span class="main-nav__toggle-2"></span>'),$(".main-nav__list > li > ul > li > ul > li").has(".main-nav__sub-3").addClass("has-children").prepend('<span class="main-nav__toggle-2"></span>'),$(".main-nav__toggle-2").on("click",function(){$(this).toggleClass("main-nav__toggle--rotate"),$(this).siblings(".main-nav__sub-2").slideToggle("normal"),$(this).siblings(".main-nav__sub-3").slideToggle("normal")}),$("#header-mobile__search-icon").on("click",function(){$(this).toggleClass("header-mobile__search-icon--close"),$(".header-mobile").toggleClass("header-mobile--expanded")})}},countDown:function(){var e=$(".countdown-counter"),t=e.data("date");e.countdown({date:t,render:function(e){$(this.el).html("<div class='countdown-counter__item countdown-counter__item--days'>"+this.leadingZeros(e.days,2)+" <span class='countdown-counter__label'>days</span></div><div class='countdown-counter__item countdown-counter__item--hours'>"+this.leadingZeros(e.hours,2)+" <span class='countdown-counter__label'>hours</span></div><div class='countdown-counter__item countdown-counter__item--mins'>"+this.leadingZeros(e.min,2)+" <span class='countdown-counter__label'>mins</span></div><div class='countdown-counter__item countdown-counter__item--secs'>"+this.leadingZeros(e.sec,2)+" <span class='countdown-counter__label'>secs</span></div>")}})},circularBar:function(){var a="#ecf0f6";"template-football"==e&&(a="#4e4d73"),s.exists()&&s.easyPieChart({barColor:t,trackColor:a,lineCap:"square",lineWidth:8,size:90,scaleLength:0})},MagnificPopup:function(){o.exists()&&$(".mp_single-img").magnificPopup({type:"image",removalDelay:300,gallery:{enabled:!1},mainClass:"mfp-fade",autoFocusLast:!1}),r.exists()&&$(".mp_gallery").magnificPopup({type:"image",removalDelay:300,gallery:{enabled:!0},mainClass:"mfp-fade",autoFocusLast:!1}),l.exists()&&$(".mp_iframe").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade",autoFocusLast:!1,patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"})},isotope:function(){if(n.exists())var e=n.imagesLoaded(function(){e.isotope({itemSelector:".post-grid__item",layoutMode:"fitRows",masonry:{columnWidth:".post-grid__item"}})});if(d.exists())var t=d.imagesLoaded(function(){t.isotope({itemSelector:".post-grid__item",layoutMode:"masonry",percentPosition:!0,masonry:{columnWidth:".post-grid__item"}})});if(p.exists())var t=p.imagesLoaded(function(){t.isotope({itemSelector:".album__item",layoutMode:"masonry",percentPosition:!0,masonry:{columnWidth:".album__item"}})});if(c.exists())var a=c.imagesLoaded(function(){var e=$(".js-category-filter");a.isotope({filter:"*",itemSelector:".post-grid__item",layoutMode:"masonry",masonry:{columnWidth:".post-grid__item"}}),e.on("click","button",function(){var t=$(this).attr("data-filter");e.find("button").removeClass("category-filter__link--active"),$(this).addClass("category-filter__link--active"),a.isotope({filter:t})})})},SlickCarousel:function(){if(g.exists()&&g.slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:0,responsive:[{breakpoint:992,settings:{arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:3}},{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:2}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:1,dots:!0}}]}),y.exists()){y.slick({slidesToShow:4,slidesToScroll:1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,responsive:[{breakpoint:992,settings:{arrows:!1,slidesToShow:3,infinite:!0}},{breakpoint:768,settings:{arrows:!1,slidesToShow:2,infinite:!1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1,infinite:!1}}]});var t=!1;$(".category-filter--carousel .category-filter__link").on("click",function(e){var t=$(this).data("category");y.slick("slickUnfilter"),y.slick("slickFilter","."+t),$(".category-filter--carousel .category-filter__link--active").removeClass("category-filter__link--active"),$(this).addClass("category-filter__link--active"),e.preventDefault()}),$(".category-filter--carousel .category-filter__link--reset").on("click",function(e){y.slick("slickUnfilter"),$(".category-filter--carousel .category-filter__link").removeClass("category-filter__link--active"),$(this).addClass("category-filter__link--active"),t=!1,e.preventDefault()})}if(f.exists()){f.slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:768,settings:{arrows:!1}}]});var t=!1;$(".category-filter--featured .category-filter__link").on("click",function(e){var t=$(this).data("category");f.slick("slickUnfilter"),f.slick("slickFilter","."+t),$(".category-filter--featured .category-filter__link--active").removeClass("category-filter__link--active"),$(this).addClass("category-filter__link--active"),e.preventDefault()}),$(".category-filter--featured .category-filter__link--reset").on("click",function(e){f.slick("slickUnfilter"),$(".category-filter--featured .category-filter__link").removeClass("category-filter__link--active"),$(this).addClass("category-filter__link--active"),t=!1,e.preventDefault()})}if(u.exists()&&u.slick({centerMode:!0,centerPadding:0,slidesToShow:3,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:1}}]}),m.exists())if("template-football"==e){var t=!1;$(".awards-filter .awards-filter__link").on("click",function(e){var t=$(this).data("category");m.slick("slickUnfilter"),m.slick("slickFilter","."+t),$(".awards-filter .awards-filter__link--active").removeClass("awards-filter__link--active"),$(this).addClass("awards-filter__link--active"),e.preventDefault()}),$(".awards-filter .awards-filter__link--reset").on("click",function(e){m.slick("slickUnfilter"),$(".awards-filter .awards-filter__link").removeClass("awards-filter__link--active"),$(this).addClass("awards-filter__link--active"),t=!1,e.preventDefault()}),m.slick({slidesToShow:1,arrows:!1,dots:!0,vertical:!0,verticalSwiping:!0})}else m.slick({slidesToShow:1,arrows:!0,dots:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]});h.exists()&&$(window).on("load",function(){h.slick({slidesToShow:3,arrows:!1,dots:!1,infinite:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1,dots:!0,variableWidth:!1}}]})}),b.exists()&&b.slick({slidesToShow:1,arrows:!1,dots:!0}),_.exists()&&(_.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".product__slider-thumbs"}),$(".product__slider-thumbs").slick({slidesToShow:3,slidesToScroll:1,asNavFor:_,focusOnSelect:!0,vertical:!0})),v.exists()&&v.slick({slidesToShow:1,arrows:!0,dots:!1,responsive:[{breakpoint:992,settings:{arrows:!1}}]}),k.exists()&&k.slick({slidesToShow:3,autoplay:!0,autoplaySpeed:3e3,arrows:!0,dots:!1,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:2}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]}),w.exists()&&(w.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,autoplay:!0,autoplaySpeed:8e3,asNavFor:".hero-slider-thumbs",responsive:[{breakpoint:992,settings:{fade:!1}}]}),$(".hero-slider-thumbs").slick({slidesToShow:3,slidesToScroll:1,asNavFor:w,focusOnSelect:!0})),T.exists()&&T.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,dots:!0,autoplay:!0,autoplaySpeed:8e3,adaptiveHeight:!0}),S.exists()&&S.slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:5e3,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]})},ContentFilter:function(){L.exists()&&$(".content-filter__toggle").on("click",function(e){e.preventDefault(),$(this).toggleClass("content-filter__toggle--active"),$(".content-filter__list").toggleClass("content-filter__list--expanded")})},ChartJs:function(){if(C.exists()){var e={type:"bar",data:{labels:["2010","2011","2012","2013","2014","2015"],datasets:[{label:"WON",data:[70,67,78,87,69,76],backgroundColor:"#ffdc11"},{label:"LOST",data:[40,45,36,28,43,35],backgroundColor:"#ff8429"}]},options:{legend:{display:!1,labels:{boxWidth:8,fontSize:9,fontColor:"#31404b",fontFamily:"Montserrat, sans-serif",padding:20}},tooltips:{backgroundColor:"rgba(49,64,75,0.8)",titleFontSize:0,titleSpacing:0,titleMarginBottom:0,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scales:{xAxes:[{barThickness:14,gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10}}],yAxes:[{gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{beginAtZero:!0,fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10,padding:20}}]}}},t=C,a=new Chart(t,e);document.getElementById("gamesHistoryLegend").innerHTML=a.generateLegend()}if(x.exists()){var e={type:"bar",data:{labels:["2010","2011","2012","2013","2014","2015"],datasets:[{label:"WON",data:[40,45,36,28,42,35],backgroundColor:"#c2ff1f"},{label:"LOST",data:[70,67,75,86,68,76],backgroundColor:"#38a9ff"}]},options:{legend:{display:!1,labels:{boxWidth:8,fontSize:9,fontColor:"#31404b",fontFamily:"Montserrat, sans-serif",padding:20}},tooltips:{backgroundColor:"rgba(49,64,75,0.8)",titleFontSize:0,titleSpacing:0,titleMarginBottom:0,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scales:{xAxes:[{stacked:!0,barThickness:34,gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10}}],yAxes:[{stacked:!0,gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10,padding:20}}]}}},t=x,a=new Chart(t,e);document.getElementById("gamesHistoryLegendSoccer").innerHTML=a.generateLegend()}if(F.exists())var e={type:"line",data:{labels:["Aug 8","Aug 15","Aug 21","Aug 28","Sep 4","Sep 19","Sep 26","Oct 3","Oct 10","Oct 16","Oct 23","Oct 30"],datasets:[{label:"POINTS",fill:!1,lineTension:0,backgroundColor:"#ffdc11",borderWidth:2,borderColor:"#ffdc11",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"bevel",pointRadius:0,pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#ffcc00",pointHoverBorderWidth:5,pointHitRadius:10,data:[104,70,115,105,45,94,84,100,82,125,78,86,110],spanGaps:!1}]},options:{legend:{display:!1,labels:{boxWidth:8,fontSize:9,fontColor:"#31404b",fontFamily:"Montserrat, sans-serif",padding:20}},tooltips:{backgroundColor:"rgba(49,64,75,0.8)",titleFontSize:0,titleSpacing:0,titleMarginBottom:0,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scales:{xAxes:[{gridLines:{color:"#e4e7ed"},ticks:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10}}],yAxes:[{gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{beginAtZero:!0,fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10,padding:20}}]}}},t=F,a=new Chart(t,e);if(M.exists()){var e={type:"line",data:{labels:["Aug 8","Aug 15","Aug 21","Aug 28","Sep 4","Sep 19","Sep 26","Oct 3","Oct 10","Oct 16","Oct 23","Oct 30"],datasets:[{label:"PREV RECORD",fill:!0,lineTension:.5,backgroundColor:"rgba(194,255,31,0.8)",borderWidth:2,borderColor:"#c2ff1f",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"bevel",pointRadius:0,pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#c2ff1f",pointHoverBorderWidth:5,pointHitRadius:10,data:[52,71,40,53,62,40,44,58,38,64,46,70,75],spanGaps:!1},{label:"THIS YEAR",fill:!0,lineTension:.5,backgroundColor:"rgba(56,169,255,0.8)",borderWidth:2,borderColor:"#38a9ff",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"bevel",pointRadius:0,pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#38a9ff",pointHoverBorderWidth:5,pointHitRadius:10,data:[71,52,87,53,17,62,56,37,91,48,75,64,78],spanGaps:!1}]},options:{legend:{display:!1,labels:{boxWidth:8,fontSize:9,fontColor:"#31404b",fontFamily:"Montserrat, sans-serif",padding:20}},tooltips:{backgroundColor:"rgba(49,64,75,0.8)",titleFontSize:0,titleSpacing:0,titleMarginBottom:0,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scales:{xAxes:[{gridLines:{color:"#e4e7ed"},ticks:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10}}],yAxes:[{gridLines:{display:!1,color:"rgba(255,255,255,0)"},ticks:{beginAtZero:!0,fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif",fontSize:10,padding:20}}]}}},t=M,a=new Chart(t,e);document.getElementById("gamesPoinstsLegendSoccer").innerHTML=a.generateLegend()}if(B.exists()){var e={type:"line",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"2016",fill:!1,lineTension:0,borderWidth:4,backgroundColor:"#3ffeca",borderColor:"#3ffeca",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"bevel",pointRadius:5,pointBorderWidth:5,pointBackgroundColor:"#fff",pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#3ffeca",pointHoverBorderWidth:5,pointHitRadius:10,data:[115,145,110,125,165,140,145,110,145,125,135,190],spanGaps:!1},{label:"2015",fill:!1,lineTension:0,borderWidth:4,backgroundColor:"#9e69ee",borderColor:"#9e69ee",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"bevel",pointRadius:5,pointBorderWidth:5,pointBackgroundColor:"#fff",pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#9e69ee",pointHoverBorderWidth:5,pointHitRadius:10,data:[95,65,130,75,113,85,102,85,103,58,48,138],spanGaps:!1}]},options:{legend:{display:!1,labels:{boxWidth:8,fontSize:9,fontColor:"#31404b",fontFamily:"Montserrat, sans-serif",padding:20}},tooltips:{backgroundColor:"rgba(50,49,80,0.8)",titleFontSize:0,titleSpacing:0,titleMarginBottom:0,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scales:{xAxes:[{gridLines:{color:"#3c3b5b"},ticks:{fontColor:"#9e9caa",fontFamily:"Montserrat, sans-serif",fontSize:10}}],yAxes:[{gridLines:{color:"#3c3b5b"},ticks:{beginAtZero:!0,fontColor:"#9e9caa",fontFamily:"Montserrat, sans-serif",fontSize:10,padding:20}}]}}},t=B,a=new Chart(t,e);document.getElementById("gamesPoinstsLegendFootball").innerHTML=a.generateLegend()}if(A.exists())var s={type:"radar",data:{labels:["OFF","AST","3PT","2PT","DEF"],datasets:[{data:[72,25,40,72,50],backgroundColor:"rgba(255,220,17,0.8)",borderColor:"#ffdc11",pointBorderColor:"rgba(255,255,255,0)",pointBackgroundColor:"rgba(255,255,255,0)",pointBorderWidth:0}]},options:{legend:{display:!1},tooltips:{backgroundColor:"rgba(49,64,75,0.8)",titleFontSize:10,titleSpacing:2,titleMarginBottom:4,bodyFontFamily:"Montserrat, sans-serif",bodyFontSize:9,bodySpacing:0,cornerRadius:2,xPadding:10,displayColors:!1},scale:{angleLines:{color:"rgba(255,255,255,0.025)"},pointLabels:{fontColor:"#9a9da2",fontFamily:"Montserrat, sans-serif"},ticks:{beginAtZero:!0,display:!1},gridLines:{color:"rgba(255,255,255,0.05)",lineWidth:2},labels:{display:!1}}}},t=A,i=new Chart(t,s)},RangeSlider:function(){if(z.exists()){var e=document.getElementById("slider-range");noUiSlider.create(e,{start:[0,350],connect:!0,range:{min:[0],max:[450]}});var t=[document.getElementById("slider-range-value-min"),document.getElementById("slider-range-value-max")];e.noUiSlider.on("update",function(e,a){t[a].innerHTML=e[a]})}},GoogleMap:function(){i.exists()&&i.each(function(){var e=$(this),t=e.attr("data-map-address")?e.attr("data-map-address"):"New York, USA",a=e.attr("data-map-zoom")?e.attr("data-map-zoom"):"15",s=e.attr("data-map-style");if("default"==s)var i=[{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"simplified"},{hue:"#ff0000"}]}];else if("light-dream"==s)var i=[{featureType:"landscape",stylers:[{hue:"#FFBB00"},{saturation:43.400000000000006},{lightness:37.599999999999994},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FFC200"},{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0078FF"},{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF6A"},{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]}];else if("shades-of-grey"==s)var i=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}];else if("blue-water"==s)var i=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}];else var i=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];e.gmap3({zoom:Number(a),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,address:t,styles:i}).marker({address:t})})},InstagramFeed:function(){if(W.exists()){new Instafeed({get:"user",target:"instagram-feed",userId:"2251271172",accessToken:"2251271172.0309320.53f9ec0c2e6445d0853a7b99757107bf",limit:6,template:'<li class="widget-instagram__item"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /></span></a></li>'}).run()}if(P.exists()){new Instafeed({get:"user",target:"instagram-feed-alt",userId:"2251271172",accessToken:"2251271172.0309320.53f9ec0c2e6445d0853a7b99757107bf",limit:12,template:'<li class="widget-instagram__item"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /></span></a></li>'}).run()}},SocialCounters:function(){R.exists()&&R.SocialCounter({facebook_user:"danfisher.dev",facebook_token:"275780749525027|Ja92xbF1Zf5UNwGqNohAfBJjEaY",google_plus_id:"117779163783887381666",google_plus_key:"AIzaSyAK02uSaWrb9IVqYjXxXjNvhwwo-GlG_1I",instagram_user:"2251271172",instagram_token:"2251271172.0309320.53f9ec0c2e6445d0853a7b99757107bf",twitter_user:"danfisher_dev"})},miscScripts:function(){$('[data-toggle="tooltip"]').tooltip(),[].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(e){new SelectFx(e)}),"template-football"==e&&$(".duotone-img").exists()&&$(".duotone-img").duotone(),H.exists()&&H.marquee({allowCss3Support:!0,pauseOnHover:!0}),$(".widget-game-result .switch-toggle").on("change",function(){var e=$(".switch__label-txt").data("text-expand"),t=$(".switch__label-txt").data("text-shrink");$(".widget-game-result__extra-stats").toggleClass("active"),$(this).prev(".switch__label-txt").text(function(a,s){return s===t?e:t})})}};$(document).on("ready",function(){O.initialize()})}(jQuery);