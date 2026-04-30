"use client";

import Script from "next/script";

const HTML = `
    
    <!-- Start of BGM -->
    <audio autoplay loop>
        <source src="/Hypermedia/Omnipresence/Creation.mp3" type="audio/mpeg"/>
    </audio>
    <!-- End of BGM -->
    
    <!-- Experimental feature start -->
    <div  id="test"></div>
    <div  id="test2"></div>
    <!-- experimental feature end -->
    
        <div class="main" style="display:inline-block;">
        <div class="dashes">
            <div class="inner">
                <h1>Omnipresence</h1>
            </div>
        </div>
    </div>
    
        <!-- Start of main -->
    <div class="main">
        <div class="dashes">
            <div class="inner">
                <h3 id="intro">Some time ago, without prior experience, I began to create art in reverrance of Lain and in order to further integrate the Wired into my life.</h3>
                <div id="images">
                
                                      
                <a title="" class="image" onclick="changeClass(y=0)" href="/Art/l (6).jpg" target="_blank"></a>    
                <a title="" class="image" onclick="changeClass(y=1)" href="/Art/l (54).jpg" target="_blank"></a>    
                <a title="" class="image" onclick="changeClass(y=2)" href="/Art/l (57).jpg" target="_blank"></a>    
                <a title="" class="image" onclick="changeClass(y=3)" href="/Art/l (48).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=4)" href="/Art/l (1).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=5)" href="/Art/l (2).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=6)" href="/Art/l (3).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=7)" href="/Art/l (4).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=8)" href="/Art/l (5).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=9)" href="/Art/l (7).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=10)" href="/Art/l (8).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=11)" href="/Art/l (9).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=12)" href="/Art/l (10).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=13)" href="/Art/l (11).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=14)" href="/Art/l (12).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=15)" href="/Art/l (13).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=16)" href="/Art/l (14).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=17)" href="/Art/l (15).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=18)" href="/Art/l (16).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=19)" href="/Art/l (17).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=20)" href="/Art/l (18).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=21)" href="/Art/l (19).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=22)" href="/Art/l (20).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=23)" href="/Art/l (21).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=24)" href="/Art/l (22).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=25)" href="/Art/l (23).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=26)" href="/Art/l (24).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=27)" href="/Art/l (25).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=28)" href="/Art/l (26).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=29)" href="/Art/l (27).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=30)" href="/Art/l (28).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=31)" href="/Art/l (29).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=32)" href="/Art/l (30).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=33)" href="/Art/l (31).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=34)" href="/Art/l (32).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=35)" href="/Art/l (33).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=36)" href="/Art/l (34).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=37)" href="/Art/l (36).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=38)" href="/Art/l (37).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=39)" href="/Art/l (38).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=40)" href="/Art/l (39).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=41)" href="/Art/l (40).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=42)" href="/Art/l (41).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=43)" href="/Art/l (42).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=44)" href="/Art/l (43).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=45)" href="/Art/l (44).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=46)" href="/Art/l (45).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=47)" href="/Art/l (59).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=48)" href="/Art/l (60).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=49)" href="/Art/l (61).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=50)" href="/Art/l (62).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=51)" href="/Art/l (63).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=52)" href="/Art/l (64).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=53)" href="/Art/l (65).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=54)" href="/Art/l (66).jpg" target="_blank"></a> 
                <a title="" class="image" onclick="changeClass(y=55)" href="/Art/l (67).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=56)" href="/Art/l (68).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=57)" href="/Art/l (69).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=58)" href="/Art/l (70).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=59)" href="/Art/l (71).jpg" target="_blank"></a>
                <a title="" class="image" onclick="changeClass(y=60)" href="/Art/l (72).jpg" target="_blank"></a>
                
                </div>
                <h3 id="outro">For here too, Lain is present.</h3>
                <img alt="" src="/img/tlp.png"/>
            </div>
        </div>
    </div>
    <!-- End of main -->

    <!-- Start of navigation -->
        <div id="rpcont">
                <a href="/Layer/Psyche" id="psyche">Back to Psyche</a>
                <a href="/Layer/Rumors" id="rumors">Back to Rumors</a>    
        </div>
        <a href="/" id="index">Return to index</a>
    <!-- End of navigation -->

`;

export default function OmnipresencePage() {
  return (
    <>
      <link rel="shortcut icon" href="/favico/Lain-Knights.ico" />
      <title>wired.omnipresence.neocities</title>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />

    </>
  );
}
