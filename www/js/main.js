//
//
//ontouchstart
//
//
var opening_sound = new Howl({
    src: ['musics/opening.mp3'],
    loop: true,
});
var select_play_screen_sound = new Howl({
    src: ['musics/select_play_screen.wav'],
    loop: true,
});
var result_played_screen = new Howl({
    src: ['musics/result_played_screen.mp3'],
    loop: true,
});
var enter_sound = new Howl({
    src: ['musics/enter.mp3']
});
var cancel_sound = new Howl({
    src: ['musics/cancel.mp3']
});
var done_sound = new Howl({
    src: ['musics/paly.mp3']
});
var dwf_music = new Howl({
    src: ['musics/dream-wind-fantasy.mp3']
});
var tap_sound = new Howl({
    src: ['musics/now_click.mp3'] //_playing
});

window.onload = function() {
    loading_screen();
};
//ロゴ表示
function loading_screen() {
    var screen = document.getElementById("display").innerHTML = "<img src ='img/background.png' width='100%'>";
    var Timer;
    Timer = setTimeout(start_screen, 3000);
}
//タイトル表示
function start_screen() {
    //var screen = document.getElementById("display").innerHTML = "<div id='canvas-wrap' onclick='getID(this);'><canvas id='myCanvas' width='1024' height='760'></canvas></div>";
    var screen = document.getElementById("display").innerHTML = "<img id='canvas-wrap' onclick='getID(this);' src ='img/top_screen.png' width='100%'><div id='tts'>TAP TO START</div>";
    //var screen = document.getElementById("display").innerHTML = "<img id='canvas-wrap' onclick='result_screen();opening_sound.pause();' src ='img/top_screen.png' width='100%'><div id='tts'>TAP TO START</div>";
    var Timer;
    opening_sound.play();
    tts();
}
var hanum = 0;
function tts (){
    var tts_text = document.getElementById("tts").setAttribute("class", "tap_to_fadeout");
    //tap_to_fadein
    //tap_to_fadeout
    if (hanum == 0){
    var Timer = setTimeout(ttf, 3000);
    }
}

function ttf () {
    var tts_text = document.getElementById("tts").setAttribute("class", "tap_to_fadein");
    if (hanum == 0){
    var Timer = setTimeout(tts, 3000);
    }
}
//はじめる
function getID(element) {
    var id = element.id;
    if (id == "canvas-wrap") {
        hanum = 1;
        done_sound.play();
        opening_sound.pause();
        //var screen = document.getElementById("display").innerHTML = "<img src ='img/loading.gif' width='100%'>";
        var screen = document.getElementById("display").innerHTML = "<img src ='img/loading_screen.png' width='100%'>";
        var Timer;
        Timer = setTimeout(main_screen, 2000);
    } else {}
}

  

var slider = "<div class='slider'><a href='#slide-1'>1</a><a href='#slide-2'>2</a><a href='#slide-3'>3</a><a href='#slide-4'>4</a><a href='#slide-5'>5</a><div class='slides'><div id='slide-1'><div class='titlemop'>ゆめかぜファンタジー</div><button id='0' class='links2' onclick='play_on(this)'>プレイ！</button></div><div id='slide-2'><img src='img/3057.png'><div class='kaikin'>この曲を解禁するには<font color='red'>20</font>ランクが必要です。</div><div class='titlemop'>RedsRaid</div><div class='links_lock'>プレイ！</div></div><div id='slide-3'><img src='img/3057.png'><div class='kaikin'>この曲を解禁するには<font color='red'>30</font>ランクが必要です。</div><div class='titlemop'>RayrisBlue</div><div class='links_lock'>プレイ！</div></div><div id='slide-4'><img src='img/3057.png'><div class='kaikin'>この曲を解禁するには<font color='red'>40</font>ランクが必要です。</div><div class='titlemop'>Focus You</div><div class='links_lock'>プレイ！</div></div><div id='slide-5'><img src='img/3057.png'><div class='kaikin'>この曲を解禁するには<font color='red'>50</font>ランクが必要です。</div><div class='titlemop'>Rescuex2</div><div class='links_lock'>プレイ！</div></div></div></div>";
//プレイする
function main_screen() {
    select_play_screen_sound.play();
    var screen = document.getElementById("display").innerHTML = "<img src='img/screen.png' width='100%'/>" + slider;
}
//選択したよ
function play_on(play_id) {
    var id = play_id.getAttribute("id"); // 1:0 . 2:1 ....
    //opening_sound.pause();
    select_play_screen_sound.pause();
    var screen = document.getElementById("display").innerHTML = "<div class='play_prev_loading'><img src='img/loading_screen.png' width='100%' /></div>";
    var Timer;
    Timer = setTimeout(one_song_player, 3000);
    var screen = document.getElementById("display");
    setTimeout(function() {
        screen.classList.add('fadeout');
    }, 2000);
}
var sen_i = 0; 
function one_song_player() {
    var screen = document.getElementById("display");
    screen.innerHTML = " ";
    screen.classList.remove('fadeout');

    var height = window.innerHeight;
    var width = window.innerWidth;
    var game = new Phaser.Game(width, height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create});

    function preload() {

        game.load.image('playground', 'img/play_ground.png');
        game.load.image('button', 'img/button.png');
        game.load.image('note', 'img/note.png');
        game.load.image('scorebar', 'img/score_bar.png');
        game.load.image('scoretxt', 'img/score_text.png');
        game.load.audio('tap_sound', ['musics/now_click.mp3']);
    }

    var count = 1;
    var note_line_1;
    var note_line_2;
    var note_line_3;
    var note_line_4;
    var note_line_5;
    var button_1;
    var button_2;
    var button_3;
    var button_4;
    var button_5;
    var score = parseInt(localStorage.getItem("score"));
    localStorage.setItem("score","0");
    var scoreText = null;
    var compare_txt = null;

    function create() {
        dwf_music.play();
        var sor_w = 1024;
        var sor_h = 768;
        var height_ = window.screen.height;
        var width_ = window.screen.width;
        var play_ground = game.add.sprite(0, 0, 'playground');
        play_ground.width = game.width;
        play_ground.height = game.height_;
        var score_bar = game.add.sprite(230, 20, 'scorebar');
        score_bar.scale.setTo((width_ / sor_w),(height_ / sor_h));
        var score_txt = game.add.sprite(200, 40, 'scoretxt');
        var btn_h = 200*(height_ / sor_h);
        var btn_1 = 450*(width_ / sor_w),
            btn_2 = 250*(width_ / sor_w),
            btn_3 = 60*(width_ / sor_w),
            btn_4 = 130*(width_ / sor_w),
            btn_5 = 320*(width_ / sor_w);
        //button
        button_1 = game.add.button(game.world.centerX - btn_1, game.world.centerY + btn_h, 'button', actionOnClick_1);
        button_1.width = 120;
        button_1.height = 120;

        button_2 = game.add.button(game.world.centerX - btn_2, game.world.centerY + btn_h, 'button', actionOnClick_2);
        button_2.width = 120;
        button_2.height = 120;

        button_3 = game.add.button(game.world.centerX - btn_3, game.world.centerY + btn_h, 'button', actionOnClick_3);
        button_3.width = 120;
        button_3.height = 120;

        button_4 = game.add.button(game.world.centerX + btn_4, game.world.centerY + btn_h, 'button', actionOnClick_4);
        button_4.width = 120;
        button_4.height = 120;

        button_5 = game.add.button(game.world.centerX + btn_5, game.world.centerY + btn_h, 'button', actionOnClick_5);
        button_5.width = 120;
        button_5.height = 120;
        play_notes();
    }
    var count = 0;
        var l_0 = [0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
        var l_1 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1];
        var l_2 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1];
        var l_3 = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1];
        var l_4 = [1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
    function play_notes() {
        var id = setInterval(function() {
            generate_notes();
            if (count > l_0.length) {　
                　 //idをclearIntervalで指定している
                if (sen_i == 0){
                sen_i = 1;
                clearInterval(id);
                result_screen();
                }
            }
        }, 3000);
    }

    function generate_notes() {
        var acceleration_y = 220;
        var create_y = -100;
        var i = count;
        var sor_w = 1024;
        var sor_h = 768;
        var height_ = window.screen.height;
        var width_ = window.screen.width;
        var note_lines = [450*(width_ / sor_w), 250*(width_ / sor_w), 60*(width_ / sor_w), -130*(width_ / sor_w), -320*(width_ / sor_w)];
        var render_1;
        if (l_0[i] == 1) {
            note_line_1 = game.add.sprite(game.world.centerX - note_lines[0], create_y, 'note');
            note_line_1.width = 120;
            note_line_1.height = 120;
            game.physics.enable(note_line_1, Phaser.Physics.ARCADE);
            note_line_1.body.acceleration.y = acceleration_y;
        }
        if (l_1[i] == 1) {
            note_line_2 = game.add.sprite(game.world.centerX - note_lines[1], create_y, 'note');
            note_line_2.width = 120;
            note_line_2.height = 120;
            game.physics.enable(note_line_2, Phaser.Physics.ARCADE);
            note_line_2.body.acceleration.y = acceleration_y;
        }
        if (l_2[i] == 1) {
            note_line_3 = game.add.sprite(game.world.centerX - note_lines[2], create_y, 'note');
            note_line_3.width = 120;
            note_line_3.height = 120;
            game.physics.enable(note_line_3, Phaser.Physics.ARCADE);
            note_line_3.body.acceleration.y = acceleration_y;
        }
        if (l_3[i] == 1) {
            note_line_4 = game.add.sprite(game.world.centerX - note_lines[3], create_y, 'note');
            note_line_4.width = 120;
            note_line_4.height = 120;
            game.physics.enable(note_line_4, Phaser.Physics.ARCADE);
            note_line_4.body.acceleration.y = acceleration_y;
        }
        if (l_4[i] == 1) {
            note_line_5 = game.add.sprite(game.world.centerX - note_lines[4], create_y, 'note');
            note_line_5.width = 120;
            note_line_5.height = 120;
            game.physics.enable(note_line_5, Phaser.Physics.ARCADE);
            note_line_5.body.acceleration.y = acceleration_y;
        }
        count++;
    }
        
    function actionOnClick_1() {
        
                if(compare_txt != null){
                    compare_txt.destroy();
                    scoreText.destroy();
                }
        //tap_sound.play();
        music = game.add.audio('tap_sound');
        music.play();
        var b1 = button_1.y;
        var n1 = note_line_1.y;
        if (note_line_1 == undefined){
        
        } else {
            
        if (note_line_1.y == undefined){
            
         } else {
        var value_ = b1 - n1;
        if(value_ < 200){
            if(value_ < 100 && value_ > 50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
        var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
}


            if (value_ < 50 && value_ > 15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);

}
            if (value_ < 15 && value_ > -15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "EXCELLENT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 3000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            if (value_ < -15 && value_ > -50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < -50 && value_ > -100){
            compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);    
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < 200 && value_ > 100){
                if ( value_ < -100 && value_ > -200){
                 compare_txt = game.add.text(game.world.centerX, game.world.centerY, "BAD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data); 
        localStorage.setItem("score", s1);
        Timer = setTimeout(removeText, 100);   
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
                }
            }
        }
            
            
        }
        }
    }
    function actionOnClick_2() {
        
                if(compare_txt != null){
                    compare_txt.destroy();
                    scoreText.destroy();
                }
        //tap_sound.play();
        music = game.add.audio('tap_sound');
        music.play();
        var b1 = button_2.y;
        var n1 = note_line_2.y;
        if (note_line_1 == undefined){
        
        } else {
            
        if (note_line_1.y == undefined){
            
        } else {
        var value_ = b1 - n1;
        if(value_ < 200){
            if(value_ < 100 && value_ > 50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
        var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
}


            if (value_ < 50 && value_ > 15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);

}
            if (value_ < 15 && value_ > -15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "EXCELLENT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 3000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            if (value_ < -15 && value_ > -50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < -50 && value_ > -100){
            compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);    
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < 200 && value_ > 100){
                if ( value_ < -100 && value_ > -200){
                 compare_txt = game.add.text(game.world.centerX, game.world.centerY, "BAD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data); 
        localStorage.setItem("score", s1);
        Timer = setTimeout(removeText, 100);   
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
                }
            }
        }
            
            
        }
        }
    }
    function actionOnClick_3() {
        
                if(compare_txt != null){
                    compare_txt.destroy();
                    scoreText.destroy();
                }
        //tap_sound.play();
        music = game.add.audio('tap_sound');
        music.play();
        var b1 = button_3.y;
        var n1 = note_line_3.y;
        if (note_line_1 == undefined){
        
        } else {
            
        if (note_line_1.y == undefined){
            
        } else {
        var value_ = b1 - n1;
        if(value_ < 200){
            if(value_ < 100 && value_ > 50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
        var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
}


            if (value_ < 50 && value_ > 15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);

}
            if (value_ < 15 && value_ > -15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "EXCELLENT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 3000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            if (value_ < -15 && value_ > -50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < -50 && value_ > -100){
            compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);    
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < 200 && value_ > 100){
                if ( value_ < -100 && value_ > -200){
                 compare_txt = game.add.text(game.world.centerX, game.world.centerY, "BAD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data); 
        localStorage.setItem("score", s1);
        Timer = setTimeout(removeText, 100);   
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
                }
            }
        }
            
            
        }
        }
    }
    function actionOnClick_4() {
        
                if(compare_txt != null){
                    compare_txt.destroy();
                    scoreText.destroy();
                }
        //tap_sound.play();
        music = game.add.audio('tap_sound');
        music.play();
        var b1 = button_4.y;
        var n1 = note_line_4.y;
        if (note_line_1 == undefined){
        
        } else {
            
        if (note_line_1.y == undefined){
            
        } else {
        var value_ = b1 - n1;
        if(value_ < 200){
            if(value_ < 100 && value_ > 50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
        var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
}


            if (value_ < 50 && value_ > 15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);

}
            if (value_ < 15 && value_ > -15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "EXCELLENT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 3000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            if (value_ < -15 && value_ > -50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < -50 && value_ > -100){
            compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);    
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < 200 && value_ > 100){
                if ( value_ < -100 && value_ > -200){
                 compare_txt = game.add.text(game.world.centerX, game.world.centerY, "BAD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data); 
        localStorage.setItem("score", s1);
        Timer = setTimeout(removeText, 100);   
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
                }
            }
        }
            
            
        }
        }
    }
    function actionOnClick_5() {
        
                if(compare_txt != null){
                    compare_txt.destroy();
                    scoreText.destroy();
                }
        //tap_sound.play();
        music = game.add.audio('tap_sound');
        music.play();
        var b1 = button_5.y;
        var n1 = note_line_5.y;
        if (note_line_1 == undefined){
        
        } else {
            
        if (note_line_1.y == undefined){
            
        } else {
        var value_ = b1 - n1;
        if(value_ < 200){
            if(value_ < 100 && value_ > 50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
        var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
}


            if (value_ < 50 && value_ > 15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);

}
            if (value_ < 15 && value_ > -15){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "EXCELLENT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 3000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            if (value_ < -15 && value_ > -50){
                compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GREAT !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 1000); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < -50 && value_ > -100){
            compare_txt = game.add.text(game.world.centerX, game.world.centerY, "GOOD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
        Timer = setTimeout(removeText, 100);    
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data + 500); 
        localStorage.setItem("score", s1);
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
            }
            
            
            if (value_ < 200 && value_ > 100){
                if ( value_ < -100 && value_ > -200){
                 compare_txt = game.add.text(game.world.centerX, game.world.centerY, "BAD !", { font: "65px Arial", fill: "#ff0044", align: "center" });
    compare_txt.anchor.setTo(0.5, 0.5);
var Timer;
var data = parseInt(localStorage.getItem("score"));
        var s1 = parseInt(data); 
        localStorage.setItem("score", s1);
        Timer = setTimeout(removeText, 100);   
        scoreText = game.add.text(12, 12, 'Score:' + s1 , {font: "30px Arial", fill: "#ff0044", align: "center"});
var Timer;
        Timer = setTimeout(remove_score_Text, 2800);
                }
            }
        }
            
            
        }
        }
    }
    function removeText() {

    compare_txt.destroy();
    compare_txt = null;
}
    function remove_score_Text() {

    scoreText.destroy();
    scoreText = null;
}
}

function result_screen() {
    result_played_screen.play();
    var rst_score = localStorage.getItem("score");
    var screen = document.getElementById("display").innerHTML = "<img src='img/top_screen.png' width='100%'><div id='result_scr'><h1>プレイ結果</h1><h2>ゆめかぜファンタジー</h2><h2>Score:"+rst_score +"</h2><button onclick='main_screen();result_played_screen.pause();' class='links2'>曲選択に戻る</button></div>";

}