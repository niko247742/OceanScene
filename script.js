TweenMax.to($("#bubble3"), 2, {y: -250, scale: 1, repeat: -1});
TweenMax.to($("#bubble10"), 4, {y: -320, scale: 0.5, repeat: -1});

TweenMax.to($("#bubble6"), 3, {y: -250, scale: 1.5, repeat: -1});

TweenMax.to($("#bubble2"), 0.5, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble1"), 1, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble4"), 0.8, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble7"), 0.5, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble8"), 1, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble9"), 0.7, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble11"), 1, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});
TweenMax.to($("#bubble5"), .6, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo: true});




var tl = new TimelineMax({ repeat: -1 });
var tl2 = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });
var tl3 = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });



tl.to($("#bluelayerfront"), 4, {x: '-=120', y: '+=40', yoyo:true})
  .to($("#bluelayerfront"), 3, {x: 0, y: -20});
tl2.to($("#bl2"), 4, { x:200, y: -50});
tl3.to($("#bl3"), 3,{y: -100 })
  .to($("#bl3"), 3, { y: 100 });







TweenMax.to($("#seaweed1"), 3, {x: 8, repeat: -1, yoyo: true,})
TweenMax.to($("#seaweed2"), 3, {x: 15, delay: 1, repeat: -1, yoyo: true, scale: 0.9})
TweenMax.to($("#seaweed3"), 3, {x: 8, delay: 0.5, repeat: -1, yoyo: true})

TweenMax.from($("#yellowfish"), 6, {x: 1000, y: 100, repeat: -1});
TweenMax.to($("#yellowfish"), 6, {x: -400, repeat: -1});

TweenMax.from($("#pinkfish"), 6, {x: 1000, y:-50, repeat: -1});
TweenMax.to($("#pinkfish"), 6, {x: -600, repeat: -1});

TweenMax.to($("#coralpink1"), 3, {scale: 0.9, repeat: -1})
  // TweenMax.to($("#coralpink2"), 3, {scale: 0.9, repeat: -1})




















