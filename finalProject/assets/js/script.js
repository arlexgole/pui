$(document).ready(function() {
  
  // NEPAL animation
  // Wrap every letter in a span
  $('#nepal').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  // starting a time line
  var basicTimeline = anime.timeline();

  basicTimeline
  // first animating NEPAL
  .add({
    targets: '#nepal .letter',
    // make it appear by changing opacity
    opacity: [0,1],
    duration: 1300,
    easing: 'easeInSine',
    // delaying the letter
    delay: function(el, i) {
      return 200 * (i+1) 
    }
  })
  // second animating the arrow
  .add({
    targets: '#arrowImage',
    // make it appear by changing opacity
    opacity: {
      value: [0,1],
      duration: 150,
      easing: 'easeInSine'
    }
  })

  // bouncing the arrow icon on the home page
  var moveArrow = anime({
    targets: '#arrow',
    loop: true,
    // changing the Y value
    translateY: {
      value: 10,
      duration: 1000,
      easing: 'easeInOutCubic'
    },
  })

  // full page js
  $('#fullpage').fullpage({
    // background colors
    sectionsColor: ['', '#292944', '#EE7785', '#696BC8', '#1B242E'],
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    // set scrolling speed high so pages don't get skipped
    scrollingSpeed: 1000,
    onLeave: function(index, nextIndex, direction){
      // checking the index and direction
      console.log(index, nextIndex, direction)
      var leavingSection = $(this);
      // depending on the page, animaite different things
      // second page: intro
      if (nextIndex == 2) {
        // animate text
        var moveText1 = anime({
          targets: '.text1',
          delay: 800,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animate Y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
      }
      // third page: general info
      if (nextIndex == 3) {
        // animate text
        var moveText2 = anime({
          targets: '.text2',
          delay: 800,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the Y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var info1 = anime({
          targets: '.info1',
          delay: 900,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the Y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var info2 = anime({
          targets: '.info2',
          delay: 1000,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var info3 = anime({
          targets: '.info3',
          delay: 1100,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
      }

      // fourth page: places to visit
      if (nextIndex == 4) {
        // animate text
        var moveText3 = anime({
          targets: '.text3',
          delay: 800,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
      }

      // fifth page: food
      if (nextIndex == 5) {
        // animate text
        var moveText4 = anime({
          targets: '.text4',
          delay: 800,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var moveText5 = anime({
          targets: '.text5',
          delay: 900,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var moveText6 = anime({
          targets: '.text6',
          delay: 1000,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var moveText7 = anime({
          targets: '.text7',
          delay: 1100,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          },
        })
        var moveText8 = anime({
          targets: '.text8',
          delay: 1100,
          // make it appear by changing opacity
          opacity: {
            value: 1,
            duration: 300,
            easing: 'easeInSine'
          },
          // animating the y
          translateY: {
            value: -200,
            duration: 300,
            easing: 'easeInSine',
          }
        })
      }
    } // closing on leave function
  }); // closing full page

}); // closing document ready

