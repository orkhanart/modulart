var f;
var consolas;
var animationData;

var gradBGGraphic;
const gradients = [
    ["#27278d", "#3c6fa2", "#51b7b7", "#8af0bd"],
    ["#6f096f", "#7e4bb1", "#8d8df3", "#a9d4ff"],
    ["#6f096f", "#a74174", "#e07a7a", "#f5c28f"],
    ["#004f27", "#298f29", "#7eb646", "#b6e676"],
    ["#393900", "#6c7500", "#a2b000", "#d7e90e"],
    ["#552a00", "#ad4747", "#da74a7", "#ffa8ff"]
];

const themes = [
    ["9bebeb", "6da1df", "6653cb", "501a68"],
    ["f4e4d9", "fd78ad", "038ea8", "2d2a01"],
    ["ffec8d", "32d9ce", "f41c7d", "3f0d68"],
    ["f7ffb7", "a5d145", "2a8037", "001b27"],
    ["001b27", "97b6ff", "dd02ef", "011f11"],
    ["fff5de", "fd9785", "f60983", "15017a"],
    ["c5fbe1", "c6aa35", "af5314", "3c1e15"],
    ["d4f1f0", "a1b467", "7f6f01", "2c2517"],
    ["2c2517", "90adbb", "56689d", "262338"]
]
const colorless = ["ffffff", "ffffff", "ffffff", "ffffff"]

const templates = [
    `

##HAIR##7
| ##EYEBROW##1   ##EYEBROW##1 |
<( ##EYE1##1   ##EYE2##1 )>
(  ##NOSE##1  )
\\ ##MOUTH##3 /
\\ˍˍˍ/
`,
    `

##HAIR##7
#       #
d| ##EYE1##1   ##EYE2##1 |b
(  ##NOSE##1  )
) ##MOUTH##3 (
(_____)
`,
    `

##HAIR##7
{       }
d| ##EYE1##1   ##EYE2##1 |b
\\  ##NOSE##1  /
{ ##MOUTH##3 }
└~~~┘
`,
    `

##HAIR##7
║ ##EYEBROW##1   ##EYEBROW##1 ║
d║ ##EYE1##1   ##EYE2##1 ║b
║  ##NOSE##1  ║
╚╗ ##MOUTH##3 ╔╝
╚═════╝
`,
    `

┌##HAIR##7┐
!       !
«│ ##EYE1##1   ##EYE2##1 │»
\\  ##NOSE##1  /
├ ##MOUTH##3 ┤
\`───\´
`,
];

const eyeOpt = { "o": 100, "O": 95, "0": 90, "p": 85, "P": 80, "q": 75, "°": 70, "Q": 65, "Ö": 60, "ö": 55, "ó": 52, "Ô": 49, "■": 46, "9": 43, "Ó": 40, "Ő": 37, "ő": 35, "○": 30, "⊙": 27, "╬": 25, "♥": 20, "¤": 15, "đ": 10 };
const noseOpt = { " < ": 100, " > ": 95, " V ": 90, " W ": 85, " v ": 80, " u ": 70, " c ": 60, " C ": 55, " ┴ ": 50, " L ": 40, " Ł ": 35, " └ ": 25, " ┘ ": 20, " ╚ ": 15, " ╝ ": 10 };
const mouthOpt = { "-": 100, "_": 85, "=": 60, "~": 45, "═": 25 };
const hairOpt = { "_": 100, "/": 90, "!": 75, "%": 60, "║": 50, "▄": 40, "█": 35 };
const browsOpt = { "_": 100, "~": 70, "¬": 30 };
const hats = [
    ['  ┌─────┐  ', '  │     │  ', ' ─┴─────┴─ '],
    ['  ┌─────┐  ', '  ├─────┤  ', ' ─┴─────┴─ '],
    ['  ┌▄▄▄▄▄┐  ', '  ├─────┤  ', ' ─┴─────┴─ '],
    ['  ┌─────┐  ', '  ├─────┤  ', ' ─┴▀▀▀▀▀┴─ '],
    ['  ┌▄▄▄▄▄┐  ', '  ├─────┤  ', ' ─┴▀▀▀▀▀┴─ '],
    ['  ┌▄▄▄▄▄┐  ', '  ├█████┤  ', ' ─┴▀▀▀▀▀┴─ '],
    ['  ┌─────┐  ', '  │     │  ', ' ─┴▀▀▀▀▀┴─ '],
    ['           ', '  ┌─────┐  ', ' ─┴─────┴─ '],
    ['           ', '  ┌─────┐  ', ' ─┴▀▀▀▀▀┴─ '],
    ['           ', '   /███\   ', ' ─┴▀▀▀▀▀┴─ '],
    ['           ', '   /▓▓▓\   ', ' ─┴▀▀▀▀▀┴─ '],
    ['           ', '   ┌───┐   ', '└─┴─────┴──'],
    ['         ,/', "   ┌───┐/' ", '└─┴─────┴──'],
    ['           ', '   .▄▄▄.   ', '└─┴▀▀▀▀▀┴──'],
    ['         ,/', "   .▄▄▄./' ", '└─┴▀▀▀▀▀┴──'],
    ['           ', '   /ˇˇˇ\   ', '  ┴─────┴  '],
    ['  ┌─────┐  ', ' ┌┴─────┴┐ ', ' └───────┘ '],
    ['           ', '  ┌─────┐  ', ' |░░░░░░░| '],
    ['   ,.O.,   ', '  /»»»»»\  ', ' /«««««««\ '],
    ['   ,.O.,   ', '  /AAAAA\  ', ' /VVVVVVV\ '],
    ['   ,.O.,   ', '  /WWWWW\  ', ' /MMMMMMM\ ']
];
const glasses = [
    '-O---O-',
    '-O-_-O-',
    '-┴┴-┴┴-',
    '-┬┬-┬┬-',
    '-▄---▄-',
    '-▄-_-▄-',
    '-▀---▀-',
    '-▀-_-▀-',
    '-█---█-',
    '-█-_-█-',
    '-▓---▓-',
    '-▓-_-▓-',
    '-▒---▒-',
    '-▒-_-▒-',
    '-░---░-',
    '-░-_-░-'
];

var loop;

function setup() {
    var c = createCanvas(240, 240)
    c.parent("canvDiv");

    f = new face();

    consolas = loadFont("free.ttf");

    animationData = {
        duration: random(3.5, 5.5),
        frameRate: 10
    }
    frameRate(animationData.frameRate);
    loop = createLoop({
        duration: animationData.duration,
        framesPerSecond: animationData.frameRate,
        gif: {
            download: true,
            render: false,
            fileName: f.name
        }
    })

    var selectedGrad = floor(random(0, gradients.length - 0.1))
    var invert = random([true, false])
    gradBGGraphic = createGraphics(width, height);
    //gradBGGraphic.colorMode(gradBGGraphic.HSB, gradBGGraphic.width + gradBGGraphic.height, 1, 1);
    gradBGGraphic.strokeWeight(1)
    for (var i = 0; i < gradBGGraphic.width; i++) {
        for (var j = 0; j < gradBGGraphic.height; j++) {
            var id = 4 * ((i + j) / (gradBGGraphic.width + gradBGGraphic.height));
            var id1 = floor(id);
            var id2 = min(ceil(id), 3);

            gradBGGraphic.stroke(gradBGGraphic.lerpColor(color(gradients[selectedGrad][id1]), color(gradients[selectedGrad][id2]), id - id1))
            if (invert) {
                gradBGGraphic.point(gradBGGraphic.width - i, gradBGGraphic.height - j)
            } else {
                gradBGGraphic.point(i, j)
            }
        }
    }
    gradBGGraphic.noLoop()
}

function draw() {
    background(0);

    if (frameCount > animationData.duration * animationData.frameRate) {
        print("Done");
        drawFace(f.textAnimation[0], f.x, f.y, f.s, f.gradientBackground, f.defaultCol, f.rawTemplate.split("\n").length)
        noLoop();
    } else {
        f.draw();
    }
}

function face(x = width * 1.5 / 12, y = width * 1.5 / 12, size = width * 9 / 12) {
    // Dimensions and placement
    this.x = x + size / 2;
    this.y = y;
    this.s = size;

    // Atributes
    this.name = "Character " + generateUUID();
    this.rawTemplate = random(templates);
    this.theme = random(themes);
    if (random() <= 1 / 3) this.theme = colorless;

    var invert = random([true, false]);

    this.brow = selectOption(browsOpt);
    this.eye1 = selectOption(eyeOpt);
    this.eye2 = this.eye1;
    this.nose = selectOption(noseOpt);
    this.mouth = selectOption(mouthOpt);
    this.hair = selectOption(hairOpt);

    this.showHat = random([true, false, false]);
    this.hat = random(hats);

    this.showGlasses = random([true, false, false]);
    this.glasses = random(glasses);

    if (invert) {
        this.eyeCol = this.theme[2];
        this.browCol = this.theme[2];
        this.noseCol = this.theme[1];
        this.mouthCol = this.theme[0];
        this.hairCol = this.theme[3];
    } else {
        this.eyeCol = this.theme[1];
        this.browCol = this.theme[1];
        this.noseCol = this.theme[2];
        this.mouthCol = this.theme[3];
        this.hairCol = this.theme[0];
    }
    this.defaultCol = random(this.theme);

    // Animations
    this.blinking = false;
    this.winking = false;
    this.noseShrugging = false;
    this.nodding = false;

    this.textAnimation = []

    // Show gradient background
    this.gradientBackground = random([true, false, false])

    document.getElementById("faceData").innerHTML =
        `    
        <table style="border: 1px solid black">
        <tr><th style="border: 1px solid black">
                ${this.name}
        </th></tr>
        <tr><th style="border: 1px solid black; font-size: 14px;">
                Eye type: ${this.eye2}
        </th></tr>        
        <tr><th style="border: 1px solid black; font-size: 14px;">
                Eyebrow type: ${this.brow}
        </th></tr>
        <tr><th style="border: 1px solid black; font-size: 14px;">
                Nose type: ${this.nose}
        </th></tr>
        <tr><th style="border: 1px solid black; font-size: 14px;">
                Mouth type: ${this.mouth}
        </th></tr>
        <tr><th style="border: 1px solid black; font-size: 14px;">
                Hair type: ${this.hair}
        </th></tr>
        </table>
    `

    this.draw = () => {
        push();

        textSize(this.s / this.rawTemplate.split("\n").length);
        textFont(consolas);
        textAlign(CENTER, TOP);
        noStroke()
        fill(255);

        var t = this.rawTemplate;
        t = this.smartReplace(t, "##HAIR##", this.hairCol, this.hair);
        t = this.smartReplace(t, "##EYEBROW##", this.browCol, this.brow);
        t = this.smartReplace(t, "##EYE1##", this.eyeCol, this.eye1);
        t = this.smartReplace(t, "##EYE2##", this.eyeCol, this.eye2);
        t = this.smartReplace(t, "##NOSE##", this.noseCol, this.nose);
        t = this.smartReplace(t, "##MOUTH##", this.mouthCol, this.mouth);
        t = t.split("\n");

        if (this.showHat) {
            t[0] = this.hat[0];
            t[1] = this.hat[1];
            t[2] = this.hat[2];
        }
        if (this.showGlasses) {
            t[4] = t[4].substr(0, 2) + this.glasses + t[4].substr(t[4].length - 2);
        }

        if (this.nodding) {
            t.unshift("");
            t.pop();
        }

        // Save animation frame
        this.textAnimation.push(t);

        drawFace(t, this.x, this.y, this.s, this.gradientBackground, this.defaultCol, this.rawTemplate.split("\n").length);

        this.move();
        this.update();

        pop();
    }

    this.blink = () => {
        var orig = this.eye1;
        this.eye1 = "_";
        this.eye2 = "_";

        this.blinking = true;

        setTimeout(() => {
            this.eye1 = orig;
            this.eye2 = orig;
            this.blinking = false;
        }, random(300, 700));
    }

    this.wink = () => {
        var orig = this.eye1;
        this.eye1 = "_";

        this.winking = true;

        setTimeout(() => {
            this.eye1 = orig;
            this.winking = false;
        }, random(300, 700));
    }

    this.shrugNose = () => {
        var orig = this.nose;
        this.nose = " " + this.nose.substring(0, 2);

        this.noseShrugging = true;

        setTimeout(() => {
            this.nose = orig;
            this.noseShrugging = false;
        }, random(700, 1300));
    }

    this.nod = (amount) => {
        if (amount > 0) {
            this.nodding = true;
            setTimeout(() => {
                this.nodding = false;
                setTimeout(() => {
                    this.nod(amount - 1);
                }, random(200, 300));
            }, random(200, 300));
        }
    }

    this.update = () => {}

    this.move = () => {
        var fr = animationData.frameRate;

        if (frameCount % (1.2 * fr + round(random(0, fr / 2))) == 0) {
            if (!this.blinking && !this.winking) {
                if (random() > 0.5) {
                    this.blink();
                } else {
                    this.wink();
                }
            }
        }

        if (frameCount % (1.5 * fr + round(random(0, fr / 6))) == 0) {
            if (!this.noseShrugging) {
                this.shrugNose();
            }
        }

        if (frameCount % (2.5 * fr + round(random(0, fr / 2))) == 0) {
            this.nod(ceil(random(1, 3)));
        }
    }

    this.smartReplace = (t, key, col, str) => {
        while (t.indexOf(key) != -1) {
            var i = t.indexOf(key);
            var count = t.substr(i + key.length, 1)
            t = t.replace(key + count, `##${col}:${str.repeat(count)}##`);
        }
        return t;
    }

    this.HTMLexport = () => {
        var t = this.rawTemplate;
        t = this.smartReplace(t, "##HAIR##", this.hairCol, this.hair);
        t = this.smartReplace(t, "##EYEBROW##", this.browCol, this.brow);
        t = this.smartReplace(t, "##EYE1##", this.eyeCol, this.eye1);
        t = this.smartReplace(t, "##EYE2##", this.eyeCol, this.eye2);
        t = this.smartReplace(t, "##NOSE##", this.noseCol, this.nose);
        t = this.smartReplace(t, "##MOUTH##", this.mouthCol, this.mouth);

        if (this.showHat) {
            t[0] = this.hat[0];
            t[1] = this.hat[1];
            t[2] = this.hat[2];
        }

        print(t.split("##"))
    }
}

function selectOption(dict) {
    var val = random(0, 100);
    var keys = Object.keys(dict)

    for (var i = 0; i < keys.length; i++) {
        if (dict[keys[i]] < val) {
            return keys[i - 1];
        }
    }

    return keys[keys.length - 1];
}

function drawFace(t, x, y, size, grad, defaultCol, splitLen) {
    textSize(size / splitLen);
    textFont(consolas);
    textAlign(CENTER, TOP);
    noStroke()
    fill(255);

    if (!grad) {
        for (var lid = 0; lid < t.length; lid++) {
            var l = t[lid];
            var s = l.split("##");

            var strippedText = "";
            for (var part_s of s) {
                var txt = "";

                if (part_s.split(":").length > 1) {
                    txt = part_s.split(":")[1];
                } else {
                    txt = part_s;
                }

                strippedText += txt;
            }

            unorigStripText = strippedText;
            for (var part_s of s) {
                var col = "#" + defaultCol;
                var txt = "";

                if (part_s.split(":").length > 1) {
                    col = "#" + part_s.split(":")[0];
                    txt = part_s.split(":")[1];
                } else {
                    txt = part_s;
                }

                var start = unorigStripText.indexOf(txt);
                var len = txt.length;
                var before = textWidth(strippedText.substring(0, start + 1));
                var after = textWidth(strippedText.substring(start + len - 1))
                unorigStripText = unorigStripText.replace(txt, " ".repeat(len))

                //print(s, col, txt, before, after, strippedText.substring(0, start + 1), strippedText.substring(start + len))
                //print(strippedText)

                fill(col);
                text(" ".repeat(before / textWidth(" ")) + txt + " ".repeat(after / textWidth(" ")), x, y + lid * size / t.length);
            }
        }
    } else {
        image(gradBGGraphic, 0, 0)

        var over = createGraphics(width, height)
        over.background(0);
        over.erase();

        over.textSize(size / splitLen);
        over.textFont(consolas);
        over.textAlign(CENTER, TOP);
        over.noStroke()
        over.fill(255);

        for (var lid = 0; lid < t.length; lid++) {
            var l = t[lid];
            var s = l.split("##");

            var strippedText = "";
            for (var part_s of s) {
                var txt = "";

                if (part_s.split(":").length > 1) {
                    txt = part_s.split(":")[1];
                } else {
                    txt = part_s;
                }

                strippedText += txt;
            }

            unorigStripText = strippedText;
            for (var part_s of s) {
                var col = "#" + defaultCol;
                var txt = "";

                if (part_s.split(":").length > 1) {
                    col = "#" + part_s.split(":")[0];
                    txt = part_s.split(":")[1];
                } else {
                    txt = part_s;
                }

                var start = unorigStripText.indexOf(txt);
                var len = txt.length;
                var before = over.textWidth(strippedText.substring(0, start + 1));
                var after = over.textWidth(strippedText.substring(start + len - 1))
                unorigStripText = unorigStripText.replace(txt, " ".repeat(len))

                //print(s, col, txt, before, after, strippedText.substring(0, start + 1), strippedText.substring(start + len))
                //print(strippedText)

                //fill(col);
                over.text(" ".repeat(before / over.textWidth(" ")) + txt + " ".repeat(after / over.textWidth(" ")), x, y + lid * size / t.length);
            }
        }
        over.noErase();

        image(over, 0, 0)
    }
}

function generateUUID() {
    let time = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        time += performance.now();
    }
    return 'xxxxxxx'.replace(/[xy]/g, function(c) {
        let random = (time + Math.random() * 16) % 16 | 0;
        time = Math.floor(time / 16);
        return (c === 'x' ? random : (random & 0x3 | 0x8)).toString(10);
    });
}