import * as headerObj from './partial/header';
var $ = require('../node_modules/jquery/dist/jquery');
var Global = require('./partial/global')["default"];
var deviceDetector = require('./partial/detectDevice')["default"];
window.$ = window.jQuery = $;

import {
	preloadImage,
	preloadVideo,
	getPreloadImage,
	getVideoDetail
} from './partial/preload';
import {
    playYoutubeVideo,
    changeVideo,
    stopVideo
} from './partial/youtube-player';

require('../node_modules/semantic-ui/dist/components/transition');
require('../node_modules/semantic-ui/dist/components/dropdown');
require('../node_modules/semantic-ui/dist/components/search');
require('../node_modules/semantic-ui/dist/components/api');
var lazyLoadValues = require("./partial/lazy-load-numbers");


var prevQuery = null;
var isMobile = false;
var scrollTop = 0;
var searchQuery = null;
var searchInProgress = false;
var portfolioListRef = null;
var latestProject = null;
var newProject = null;
var landingInfoSpans = null;
var layoutTimeout = null;
var preloadedFixDelay = null;
var imgToRemoveArr = [];
var readyToLoadImage = false;
var imageLoadInWait = false;
var searchData = null;
var searchViewData = null;
var prevSearchViewData = null;
var searchTerm = null;
var lastMatchedItemIndex = 0;
var time1;
var time2;
var youTubePlayer = null;

var imagePreloadIndex = 0;
var imagePreloadMaxIndex = 0;
var processIndex = 0;
var requiredCategory = "";
var requiredIndustry = "";
var portfolioList = [];
var searchList = [];
var videoLoadBuffer=[];
var searchVisible = false;
var flipTobackTimeout = null;
window.jQuery=window.$ = $;
/* require('../node_modules/semantic-ui/dist/components/transition');
require('../node_modules/semantic-ui/dist/components/dropdown'); */
var landingInfoSpans;
var layoutTimeout = null;
var filterNavEnabled = true;
var gestureChoosen = null;
var minHeightTimeout = null;
var updateGestureFrameInt = null;

var _this;

var temp_template = null;
var titlesDesk = [];
var titlesMob = [];
var descDesk = [];
var DescMob = [];
var latestFilter = null;
var filterList = null;
var videoPreloadIndex = 0;
var imagePreloadIndex = 0;
var tryvideoWaitKey = "kathakali_video";
var sharevideoKey = "FBpost";
var promotevideoKey = "BannerCut";
var videoRef = null;
var scrollHappened = false;
var scrollPos = 0;
var gestureGlider1 = null;
var gestureGlider2 = null;
var scrollSI = null;
var curr_carousel = null;
var carouselTarget = null;
var frameIndex = 0;
var frameLimit = 0;
var imgLimitIndex = 0;

var _target;

var waitFrames = 0;
var activeTarget = null;
var videoList = null;
var imagePromise = null;
var videoPromise = null;
var imagePreloadMaxIndex = 0;
var videoPreloadMaxIndex = 0;

var preloadVideoList2 = [{
	loc: "filter/FBpost",
	parentKey: "share_video",
	key: "FBpost",
	videokeyRef: "share"
}, {
	loc: "filter/FBstory",
	parentKey: "share_video",
	key: "FBstory",
	videokeyRef: "share"
}, {
	loc: "filter/SendinMessengertofriends",
	key: "SendinMessengertofriends",
	parentKey: "share_video",
	videokeyRef: "share"
}, {
	loc: "filter/GroupStory",
	key: "GroupStory",
	parentKey: "share_video",
	videokeyRef: "share"
}, {
	loc: "filter/Savetocamearoll",
	key: "Savetocamearoll",
	parentKey: "share_video",
	videokeyRef: "share"
}, {
	loc: "filter/BannerCut",
	key: "BannerCut",
	parentKey: "promote_video",
	videokeyRef: "promote"
}, {
	loc: "filter/fbcut_1",
	key: "fbcut_1",
	parentKey: "promote_video",
	videokeyRef: "promote"
}, {
	loc: "filter/Insta_Cut",
	key: "Insta_Cut",
	parentKey: "promote_video",
	videokeyRef: "promote"
}, {
	loc: "filter/TwitterCut",
	key: "TwitterCut",
	parentKey: "promote_video",
	videokeyRef: "promote"
}];
var preloadVideoArr = [];

/* window.$ = window.jQuery = $;
require('../node_modules/semantic-ui/dist/components/transition');
require('../node_modules/semantic-ui/dist/components/dropdown');
require('../node_modules/semantic-ui/dist/components/search');
require('../node_modules/semantic-ui/dist/components/api'); */
var lazyLoadValues = require("./partial/lazy-load-numbers");


var prevQuery = null;
var isMobile = false;
var scrollTop = 0;
var searchQuery = null;
var searchInProgress = false;
var portfolioListRef = null;
var latestProject = null;
var newProject = null;
var landingInfoSpans = null;
var layoutTimeout = null;
var preloadedFixDelay = null;
var imgToRemoveArr = [];
var readyToLoadImage = false;
var imageLoadInWait = false;
var searchData = null;
var searchViewData = null;
var prevSearchViewData = null;
var searchTerm = null;
var lastMatchedItemIndex = 0;
var time1;
var time2;


var imagePreloadIndex = 0;
var imagePreloadMaxIndex = 0;
var processIndex = 0;
var requiredCategory = "";
var requiredIndustry = "";
var portfolioList = [];
var searchList = [];
var searchVisible = false;
var flipTobackTimeout = null;
window.onload = function () {
    console.log(deviceDetector().device)
    if(deviceDetector().device == 'phone'){
        if(deviceDetector().userAgent.match(/iPhone/i) || deviceDetector().userAgent.match(/iPod/i) || deviceDetector().userAgent.match(/iPad/i)){
            $('#explore-portfolio').show();
        }
        else{
            $('#explore-portfolio').hide();
        }
    }   
    headerObj["default"].initHeader();
	landingInfoSpans = $("#filter-banner .info>*");
	preloadVideo("https://d2xrkn56aw2rdo.cloudfront.net/alivenow_media/banner_videos/webARVideo.mp4?raw=true", "ARvideo", "ARvideo", null, 1, true, this, {
		videoTotal: 1
	}).then(startPage);
};

$(document).ready(function () {
	
    //$('.ui.dropdown').dropdown();
	

    console.log("dfghliuhg65jhii")

	$(".nav-bullet").each(function () {
		$(this).on("click", updateNavStatus.bind(this, $(this), $(this).index(), true));
	});

	$(".wrapper").scroll(onscroll);



	videoList = document.querySelectorAll("video");
	$("#loader-logo2").css("top", "calc(50% + " + String($(".loader-logo>img").height() + 10) + "px)");
	$("#loader-logo2").css("opacity", 1);


/* 	$('.ui.dropdown').dropdown(); */
 /*    $(".ui.search").search({
        source: searchList
    }); */
   
    $(".scroll-to-top").on("click", scrollPageToTop)
    $("select#platform").on("change", onPlatformChange);
    $("select#industry").on("change", onIndustryChange)
    window.addEventListener("resize", setLayout);
    setTimeout(setLayout, 500);
    scrollTop = $(window).scrollTop();
    console.log("gaaaaga")
   loadJSONInfo();
    $("#loader-logo2").css("top", "calc(50% + " + String($(".loader-logo>img").height() + 10) + "px)")
    $("#loader-logo2").css("opacity", 1);
    //$("#search-btn").on("click",showOrHideSearch.bind(this,true));
    $("body").on("click", checkClickOnPage);

    $("#searchField").on("input propertychange paste", function () {
        if (!$(".ui.search").closest(".column").hasClass("active")) {
            $(".ui.search").closest(".column").addClass("active");
        }
    })
});



function onscroll() {


	$("#camera-details article").each(function () {
		if ($(this).height() / 2 + $(this).offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$(this).hasClass("active")) {
			$(this).addClass("active");
		}
	});

	if ($("#publish-filter .publish-header").height() + $("#publish-filter .publish-header").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$("#publish-filter .publish-header").hasClass("active")) {
		$("#publish-filter .publish-header").addClass("active");
		$("#publish-filter .publish-header-hint").addClass("active");
	}

	$("#publish-filter .publish-steps article").each(function () {
		if ($(this).height() + $(this).offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$(this).hasClass("active")) {
			$(this).addClass("active");
		}
	});
	if ($("#publish-filter2 .desktop").height() + $("#publish-filter2 .desktop").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$("#publish-filter2 .desktop").hasClass("active")) {
		$("#publish-filter2 .desktop span").addClass("active");

	}
    if ($("#publish-filter2 .mobile").height() + $("#publish-filter2 .mobile").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$("#publish-filter2 .mobile").hasClass("active")) {
		$("#publish-filter2 .mobile span").addClass("active");

	}
	$("#publish-filter2 .publish-steps article").each(function () {
		if ($(this).height() + $(this).offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$(this).hasClass("active")) {
			$(this).addClass("active");
		}
	});
	if ($("#explore-portfolio").offset().top <= $("#portfolio-banner").height() / 2 && !$('#header-sec').hasClass("minimal")) {
        $('#header-sec').addClass("minimal");
        $('#nav-sec').addClass("minimal");
    } else if ($("#explore-portfolio").offset().top > $("#portfolio-banner").height() / 2 && $('#header-sec').hasClass("minimal")) {
        $('#header-sec').removeClass("minimal");
        $('#nav-sec').removeClass("minimal");
    }
    if ($(".explore-header").height() + $(".explore-header").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$(".explore-header .explore-title").hasClass("active")) {
        $(".explore-header .explore-title").addClass("active");
        $(".explore-sorting-sec").addClass("active");
        $(".explore-content").addClass("active");
        $(".explore-content1").addClass("active");

        $(".explore-content2").addClass("active");
    }
    if ($("#filter-samples .filter-samples-head").height() / 2 + $("#filter-samples .filter-samples-head").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$("#filter-samples .filter-samples-head").hasClass("active")) {
		$("#filter-samples .filter-samples-head").addClass("active");
		$("#filter-samples .filter-samples-logo").addClass("active");
    }
    if ($("#publish-filter3 .publish-header").height() + $("#publish-filter3 .publish-header").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$("#publish-filter3 .publish-header").hasClass("active")) {
		$("#publish-filter3 .publish-header").addClass("active");
		$("#publish-filter3 .publish-header-hint").addClass("active");
    }
    // if ($("#explore-casestudy").offset().top < 0 && !$('#header-sec').hasClass("minimal")) {
    //     $('#header-sec').addClass("minimal");
    //     $('#nav-sec').addClass("minimal");
    // } else if ($("#explore-casestudy").offset().top >= 0 && $('#header-sec').hasClass("minimal")) {
    //     $('#header-sec').removeClass("minimal");
    //     $('#nav-sec').removeClass("minimal");
    // }
    if ($(".casestudy-header").height() + $(".casestudy-header").offset().top - window.innerHeight - $(window).scrollTop() <= 0 && !$(".casestudy-header .casestudy-title").hasClass("active")) {
        $(".casestudy-header .casestudy-title").addClass("active");
        $(".explore-sorting-sec").addClass("active");
        $(".explore-content").addClass("active");
    }
    
    // if ($("#explore-portfolio .explore-sorting-sec").height() + $("#explore-portfolio .explore-sorting-sec").offset().top - $(window).scrollTop() <= 80 && !$(".extra-sort").hasClass("active")) {
    //     $(".extra-sort").addClass("active");
    // }
    // if ($("#explore-portfolio .explore-sorting-sec").height() + $("#explore-portfolio .explore-sorting-sec").offset().top - $(window).scrollTop() > 80 && $(".extra-sort").hasClass("active")) {
    //     $(".extra-sort").removeClass("active");
    // }
    if ($("#explore-portfolio").offset().top <= 0 && !$(".scroll-to-top").hasClass("active")) {
        $(".scroll-to-top").addClass("active");
    }
    if ($("#explore-portfolio").offset().top > 0 && $(".scroll-to-top").hasClass("active") && !$(".scroll-to-top").hasClass("active3")) {
        $(".scroll-to-top").addClass("active3");
        setTimeout(function () {
            $(".scroll-to-top").removeClass("active");
            $(".scroll-to-top").removeClass("active3");
        }, 500)
    }
    if ($("#explore-portfolio").offset().top <= 0 && $(".scroll-to-top").hasClass("active3")) {
        $(".scroll-to-top").removeClass("active3")
    }
	for (var i = 0; i < videoList.length; i++) {

		if ($(videoList[i]).offset().top - window.innerHeight - $(window).scrollTop() < -window.innerHeight - $(videoList[i]).height() || $(videoList[i]).offset().top - window.innerHeight - $(window).scrollTop() > 0) {
			if (!videoList[i].paused && $(videoList[i]).attr("src") != "") videoList[i].pause();
		} else {
			if (videoList[i].paused && $(videoList[i]).attr("src") != "") videoList[i].play();
		}
	}
}

function checkIfScrollFinish() {
	if (scrollHappened) {
		scrollHappened = false;
		scrollPos = 0;
		//scrollSI = setInterval(checkScrollStatus, $(window).innerWidth() >= 1024 ? 25 : 100);
		updateNavStatus($(carouselTarget), $(carouselTarget).find(".glider-slide.active").index(), false);
	}
}

function updateNavStatus(_target, _activeIndex, _shouldNavigate) {
	activeTarget = $(_target).closest(".gestureHolder");

	if (_shouldNavigate) {
		if ($(_target).closest(".gestureHolder").attr("id") == "facial-gesture") {
			gestureGlider1.scrollItem(_activeIndex);
		} else {
			gestureGlider2.scrollItem(_activeIndex);
		}

		activeTarget.find(".nav-bullet").each(function () {
			$(this).find("div").removeClass("active");
		});
		activeTarget.find(".nav-bullet:eq(" + String(_activeIndex) + ")>div").addClass("active");
	}

	$(activeTarget).find(".gesture-type").html("(" + gestures[$(activeTarget).attr("id").split("-gesture")[0]][String(_activeIndex + 1)]["name"] + ")");
}

function checkScrollStatus() {
	if (scrollPos == $(carouselTarget).find(".glider-track").offset().left) {
		activeTarget.find(".nav-bullet").each(function () {
			$(this).find("div").removeClass("active");
		});
		activeTarget.find(".nav-bullet:eq(" + String($(carouselTarget).find(".glider-slide.active").index()) + ")>div").addClass("active");
		curr_carousel.scrollItem($(carouselTarget).find(".glider-slide.active").index());
		clearInterval(scrollSI);
	} else {
		scrollPos = $(carouselTarget).find(".glider-track").offset().left;
	}
}

function startedScroll(_target) {
	clearInterval(scrollSI);
	scrollHappened = true;
	curr_carousel = this;
	carouselTarget = _target;
}

function startImagePreloadLoop(_shouldPromise) {
    console.log("ybhkj")

    if ((imagePreloadIndex < imagePreloadMaxIndex && imagePreloadIndex <= lastMatchedItemIndex) && portfolioListRef.length > processIndex) {

        if (((requiredCategory != "all"&&portfolioListRef[processIndex].category.indexOf(requiredCategory)!=-1) || requiredCategory == "all") && (portfolioListRef[processIndex].industry.split(",").indexOf(requiredIndustry) != -1 || requiredIndustry == "all")) {
			doImagePreload(portfolioListRef[processIndex]);
            imagePreloadIndex++;
            processIndex++
        } else {
            processIndex++;
            startImagePreloadLoop();
        }
    } else {
        if (lastMatchedItemIndex > processIndex) {
            enableLoadMore();
        } else { 
            hideLoadMore();
        }
    }
}

function doImagePreload(_obj) {
    console.log("ybhkj")
    var _promise = preloadImage("./img/site-v2/casestudy-thumbnail/" + _obj["thumbnailUrl"] + "?raw=true", _obj["thumbnailUrl"], "1", null);
    _promise.then(function (processIndex, _data) {        
        newProject = $("<div class='project' id='" + processIndex + "'></div>");
        $(".explore-content").append(newProject).ready(function (processIndex) {
            $(this).load("partial/casestudy-template.html?v=1.0", function () {
                var imgData = getPreloadImage(_data);
                time2 = setTimeout(function (_imgData) {
                    

                    latestProject = $(".explore-content").find(".project#" + processIndex);
                    $(latestProject).find(".project-icon img").attr("src", _imgData);
                    $(latestProject).find(".project-icon").attr("id",portfolioListRef[processIndex].youtubeId)
                    $(latestProject).find(".project_detail .brand img").attr("src", "./img/site-v2/casestudy-brand-logo/" + portfolioListRef[processIndex].logoUrl)
                    $(latestProject).find(".project_detail .project-title").html(portfolioListRef[processIndex].type);
                    $(latestProject).find(".project_detail .project-info").html(portfolioListRef[processIndex].title);
                    $(latestProject).find(".project_detail .btn-action a").html(portfolioListRef[processIndex].btnInfo);
                    $(latestProject).find(".project_detail .btn-action a").attr("href", portfolioListRef[processIndex].appUrl);
                    if(portfolioListRef[processIndex].status=="not-ready"){
                        $(latestProject).find(".project_detail .btn-action").remove();
                    }
                    $(latestProject).addClass("active");
                    startImagePreloadLoop();
                    $(latestProject).find(".project-icon").click(showLargeVideo.bind($(latestProject).find(".project-icon"), $(latestProject).find(".project-icon").attr("id")))
                }.bind(this, imgData), 0);
            })
        }.bind(newProject, processIndex));
    }.bind(this, processIndex));
}
function showLargeVideo(_id) {
    if (youTubePlayer == null) {
        youTubePlayer = playYoutubeVideo(_id);
    } else {
        changeVideo(_id);
    }

}
function hideYoutubeVideo() {
    if (youTubePlayer != null) {
        stopVideo();
    }
    $("#youtube_player_sec").hide();

}
function startVideoPreloadLoop(_shouldPromise) {
	if (videoPreloadIndex < videoPreloadMaxIndex) {
		preloadVideo("./video/" + preloadVideoArr[videoPreloadIndex].loc + ".mp4?raw=true&v=1.0", preloadVideoArr[videoPreloadIndex].key, preloadVideoArr[videoPreloadIndex].parentKey, preloadVideoArr[videoPreloadIndex].videokeyRef, 1, true, null, {
			tryvideoWaitKey: tryvideoWaitKey,
			sharevideoKey: sharevideoKey,
			promotevideoKey: promotevideoKey
		}).then(startVideoPreloadLoop);
		videoPreloadIndex++;
	} else {
		if (videoPromise != null) {
			videoPromise.resolve("Done");
		}
	}

	if (_shouldPromise == true) {
		videoPromise = new $.Deferred();
		return videoPromise.promise();
	}
}


function applyVideo(_key, _data) {
	$("#" + _key).attr('src', _data);
}

function animateBanner() {
	for (var i = 0; i < landingInfoSpans.length; i++) {
		landingInfoSpans[i].classList.add("active");
	}

	setTimeout(function () {
		$("#filter-banner .sec-content").addClass("active");
	}, 750);
}

function startPage() {
	setTimeout(function () {
		
		$("#filter-banner .click_cover").on("click",function(){
			$(this).find(".playable_tap_icon").hide();
			$(this).find(".click_cover").hide();
		}.bind($("#filter-banner")));
		$("#top_iframe").attr("src", "./alivenow_playable_ad/BenJerry/index.html");
		$("#page-loader").addClass("disabled");
		setTimeout(function () {
			$("#page-loader").hide();
			$("#loader-logo2").removeClass("active");
			$(".landing-hint").addClass("animated");
		}, 1000);
		setTimeout(function () {
			document.querySelector("#ARvideo").play();
		}, 1000);
		setTimeout(animateBanner, 500);
		setTimeout(function () {

			requiredCategory = (location.hash!="")?location.hash.split("#")[1]:"all";
            imagePreloadMaxIndex = lazyLoadValues.minToLoad;
            portfolioListRef = portfolioList;
            if (readyToLoadImage) {
                getLastMatchIndex();
                startImagePreloadLoop();
            } else {
                imageLoadInWait = true;
            }
		}, 1000);
    }, 500);
    $("#youtube_player_sec").on("click", hideYoutubeVideo);

}

function setLayout() {
	clearTimeout(layoutTimeout);
	layoutTimeout = setTimeout(function () {
		$("section#try-filter .video-holder").width($("section#try-filter video").width());
		$("section#try-filter .video-holder").height($("section#try-filter video").height());

		if ($(window).innerWidth() <= 1024 && window.innerWidth * 10 < window.innerHeight * 13) {
			$("#filter-banner .sec-content").height($("#filter-banner .sec-content img").height());
		} else {
			$("#filter-banner .sec-content").height("100%");
		}
	}, 100);
}

	

function checkClickOnPage(e) {
    if ($(e.target).is("#searchField")) {
        return;
    }
    if ($(e.target).is("#search-btn")) {
        // if(!searchVisible){
        showOrHideSearch(!searchVisible);
        // }
    } else {
        showOrHideSearch(false);
    }
}

function showOrHideSearch(condition) {
    if (condition) {
        clearTimeout(flipTobackTimeout);
        $(".column .slide-left").addClass("active");
        $(".slide-left").closest(".column").removeClass("moveToBack");
        $("#search-btn").addClass("active");
        $("#searchField").focus();
    } else {
        $(".ui.search").closest(".column").removeClass("active")
        $("#search-btn").removeClass("active");
        $(".column .slide-left").removeClass("active");
        flipTobackTimeout = setTimeout(function () {
            $(".slide-left").closest(".column").addClass("moveToBack");
        }, 250)
    }

    searchVisible = condition;
}

function loadJSONInfo() {
   console.log("hii")
    $.getJSON("./json/WebAR.json?v=" + new Date().toString(), function (data2) {
        portfolioList = data2;
        readyToLoadImage = true;
        requiredCategory = "all";
        requiredIndustry = "all";
        if (imageLoadInWait) {
            console.log("dfghjhii")
            requiredCategory = "all";
            requiredIndustry = "all";
            imagePreloadMaxIndex = lazyLoadValues.minToLoad;
            getLastMatchIndex();
            startImagePreloadLoop();
        }
        fillSearchArr();
    });
}


function getLastMatchIndex() {
    lastMatchedItemIndex = -1;
    portfolioListRef.forEach(function (list, index) {
        if ((requiredCategory != "all"&&list.category.indexOf(requiredCategory)!=-1) || requiredCategory == "all") {

            if (list.industry.split(",").indexOf(requiredIndustry) != -1 || requiredIndustry == "all") {
                lastMatchedItemIndex = index;
            }
        }
    });
}


function fillSearchArr() {
    $('.ui.search').search({
        apiSettings: {
            'response': function (e) {
                searchTerm = (e.urlData.query).trim().toLowerCase();
                prepareBeforeSearch();
                return {
                    'results': searchData
                };
            }
        },
        cache: false,
        maxResults: lazyLoadValues.minToLoad,
        type: 'category',
        onSearchQuery: function (query) {
            disableLoadMore();
            prevQuery = query;
            searchForQuery(query);
        },
        onResultsOpen: function () {},
        onSelect: function (result) {
            setTimeout(function (result) {
                disableLoadMore();
                searchTerm = result.title.trim().toLowerCase();
                prepareBeforeSearch();
                searchForQuery(result.title);
            }.bind(this, result), 0)
        },
        onResultsClose: function () {
            searchTerm = $(".ui.search .prompt").val().trim().toLowerCase();
            prepareBeforeSearch();
            searchForQuery($(".ui.search .prompt").val());
        }
    });


};

function prepareBeforeSearch() {
    searchList = []
    portfolioList.forEach(function (dataObj) {

        if (requiredCategory == "all" || (requiredCategory != "all"&&dataObj.category.indexOf(requiredCategory)!=-1)) {
            if (requiredIndustry == "all" || (dataObj.industry.split(",").indexOf(requiredIndustry) != -1)) {
                searchList.push(dataObj);
            }

        }
    });

    searchData = [];
    searchViewData = [];
    searchList.forEach(function (obj) {

        if (obj.title.toLowerCase().startsWith(searchTerm) || searchTerm.length == 0) {
            var category = {};
            var obj = jQuery.extend(true, {}, obj)
            category.results = [obj];
            category.priority = 1;
            searchData.push(category);
            obj.priority = 1;
        } else if (obj.title.toLowerCase().indexOf(searchTerm) != -1) {
            var category = {};
            var obj = jQuery.extend(true, {}, obj)
            category.results = [obj];
            category.priority = 2;
            searchData.push(category);
        }
    });
    searchData.sort(dynamicSort("priority"));
    return searchData;
}

function searchForQuery(query) {
    var b = searchQuery = query.trim();
    searchInProgress = true;
    searchViewData = []
    searchData.forEach(function (obj) {
        var obj = jQuery.extend(true, {}, obj)
        searchViewData.push(obj.results[0])
    });
    processIndex = 0;
    imagePreloadIndex = 0;
    searchViewData.forEach(function (obj) {
        /*   titleMarkTimeout= setTimeout(function (obj) {
             
          }.bind(this, obj)) */
        var a = obj.title;
        obj.title = ((a.toLowerCase().indexOf(b.toLowerCase()) > 0) ? (obj.title.substr(0, a.toLowerCase().indexOf(b.toLowerCase()))) : "") + "<mark>" + obj.title.substr(a.toLowerCase().indexOf(b.toLowerCase()), b.length) + "</mark>" + obj.title.substr(a.toLowerCase().indexOf(b.toLowerCase()) + b.length)

    });
    if (JSON.stringify(prevSearchViewData) != JSON.stringify(searchViewData)) {
        prevSearchViewData = [];
        searchViewData.forEach(function (obj) {
            prevSearchViewData.push(jQuery.extend(false, {}, obj));
        });
        prepareOnPreload(searchViewData, ((b.length == 0) ? false : true)); //
    } else
        updateListTitle(searchViewData); //setTimeout(,0);

}

function updateListTitle(_viewData) {
    var cnt = 0;
    $("#explore-portfolio .project").each(function () {
        $(this).find(".project-info").html(_viewData[cnt++].title)
    })
}

function onIndustryChange(_item) {
    if (requiredIndustry == _item.target.value) {
        return;
    }
    $(".ui.search .prompt").val("");
    imagePreloadMaxIndex = lazyLoadValues.minToLoad;
    if ($(this).attr("name") == "industry-on-page") {
        $(".extra-sort #industry").val($(this).val());
        $(".extra-sort #industry").next().next().html($(this).next().next().html());
        $(".extra-sort #industry").next().next().removeClass("default");
        $(".extra-sort").find(".menu .item").removeClass("active").removeClass("selected");
        $(".extra-sort").find('*[data-value=' + _item.target.value + ']').addClass("active").addClass("selected");
    } else if ($(this).attr("name") == "industry-on-top") {
        $("#explore-portfolio #industry").val($(this).val());
        $("#explore-portfolio #industry").next().next().html($(this).next().next().html());
        $("#explore-portfolio #industry").next().next().removeClass("default");
        $("#explore-portfolio").find(".menu .item").removeClass("active").removeClass("selected");
        $("#explore-portfolio").find('*[data-value=' + _item.target.value + ']').addClass("active").addClass("selected");

    }
    requiredIndustry = _item.target.value;
    prepareBeforeMakePortfolioList(_item);
}

function prepareBeforeMakePortfolioList(_item) {
    disableLoadMore();
    imagePreloadIndex = 0;
    processIndex = 0;

    fillSearchArr();
    prepareOnPreload(portfolioList, false);
}

function onPlatformChange(_item) {
    if(_item.target.value!="all"){
        location.hash=_item.target.value;
    }else{
        location.hash="";
    }
    
    var locationHash= (location.hash.split("#")[1])||"all";
    if (requiredCategory == locationHash) {
        return;
    }
    $(".ui.search .prompt").val("");
    imagePreloadMaxIndex = lazyLoadValues.minToLoad;
    if ($(this).attr("name") == "platform-on-page") {
        $(".extra-sort #platform").val($(this).val());
        $(".extra-sort #platform").next().next().html($(this).next().next().html());
        $(".extra-sort #platform").next().next().removeClass("default");
        $(".extra-sort").find(".menu .item").removeClass("active").removeClass("selected");
        $(".extra-sort").find('*[data-value=' + locationHash + ']').addClass("active").addClass("selected");
    } else if ($(this).attr("name") == "platform-on-top") {
        $("#explore-portfolio #platform").val($(this).val());
        $("#explore-portfolio #platform").next().next().html($(this).next().next().html());
        $("#explore-portfolio #platform").next().next().removeClass("default");
        $("#explore-portfolio").find(".menu .item").removeClass("active").removeClass("selected");
        $("#explore-portfolio").find('*[data-value=' + locationHash + ']').addClass("active").addClass("selected");

    }
    requiredCategory = locationHash;
    prepareBeforeMakePortfolioList(_item);
}

function prepareOnPreload(_list, _shouldHideByDefault) {
    $(".explore-content").empty();
    imagePreloadIndex = 0;
    processIndex = 0;
    clearTimeout(time1);
    clearTimeout(time2);
    clearTimeout(preloadedFixDelay);
    if (Global.preloadImgObj.preloadPromise != null) {
        Global.preloadImgObj.preloadPromise.reject();
        Global.preloadImgObj.preloadPromise = null;
    }
    if (Global.preloadImgObj.promiseHandlerRequest != null) {
        Global.preloadImgObj.promiseHandlerRequest.abort();
        Global.preloadImgObj.promiseHandlerRequest = null;
        imgToRemoveArr = [];
        for (var i = 0; i < Global.imgArr.length; i++) {
            if (Global.imgArr[i].loaded != 100) {
                imgToRemoveArr.push(i);
            }
        }
        for (var i = imgToRemoveArr.length - 1; i >= 0; i--) {
            Global.imgArr.splice(imgToRemoveArr[i], 1)
        }
    }
    portfolioListRef = _list;
    getLastMatchIndex();
    if (lastMatchedItemIndex == -1) {
        $(".explore-content").append("<div class='not-found'>No Result Found.</div>")
    }
    startImagePreloadLoop();
    if (lastMatchedItemIndex <= imagePreloadMaxIndex || _shouldHideByDefault) {
        hideLoadMore();
    } else {
        showLoadMore();
    }
}

function scrollPageToTop() {
    $('.wrapper').animate({
        scrollTop: 0
    }, "slow");
}

function doLoadMoreList() {
    imagePreloadMaxIndex += lazyLoadValues.lazyloadCount;
    if (imagePreloadMaxIndex >= portfolioList.length) {
        hideLoadMore();
    }
    disableLoadMore();
    portfolioListRef = portfolioList;
    getLastMatchIndex();
    startImagePreloadLoop();
}


// function setLayout() {
//     clearTimeout(layoutTimeout);
// }

function hideLoadMore() {
    $(".load-more").hide();
}

function showLoadMore() {
    $(".load-more").show();
}

function enableLoadMore() {
    //console.log("ENABLED <<<>>> :::::");
    $(".load-more").on("click", doLoadMoreList);
    $(".load-more").addClass("active");
}

function disableLoadMore() {
    //console.log("DISABLED <<<>>> :::::");
    $(".load-more").off("click", doLoadMoreList);
    $(".load-more").removeClass("active");
}

