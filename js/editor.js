var _0x4f691c = _0x14bc;
(function(_0x237782, _0x46cd68) {
    var _0x37877e = _0x14bc
      , _0x2bf8b1 = _0x237782();
    while (!![]) {
        try {
            var _0x27824c = -parseInt(_0x37877e(0x26f)) / 0x1 + -parseInt(_0x37877e(0x202)) / 0x2 * (parseInt(_0x37877e(0x286)) / 0x3) + -parseInt(_0x37877e(0x1e5)) / 0x4 * (parseInt(_0x37877e(0x227)) / 0x5) + -parseInt(_0x37877e(0x276)) / 0x6 * (-parseInt(_0x37877e(0x24d)) / 0x7) + -parseInt(_0x37877e(0x291)) / 0x8 + parseInt(_0x37877e(0x283)) / 0x9 * (parseInt(_0x37877e(0x211)) / 0xa) + parseInt(_0x37877e(0x1fb)) / 0xb;
            if (_0x27824c === _0x46cd68)
                break;
            else
                _0x2bf8b1['push'](_0x2bf8b1['shift']());
        } catch (_0x460f17) {
            _0x2bf8b1['push'](_0x2bf8b1['shift']());
        }
    }
}(_0x4aa9, 0xde586));
function setImageSrc(_0x285851) {}
const initCanvas = _0x1bec20=>{
    var _0x3cd885 = _0x14bc;
    return new fabric[(_0x3cd885(0x1e8))](_0x1bec20,{
        'width': 0x294,
        'height': 0x208,
        'borderColor': 'black',
        'border': 0x3,
        'backgroundColor': _0x3cd885(0x21c),
        'preserveObjectStacking': !![],
        'selection': !![]
    });
}
  , setBackground = (_0x4d538a,_0x45b9ce)=>{
    var _0x26f487 = _0x14bc;
    fabric['Image'][_0x26f487(0x22d)](_0x4d538a, _0xef0b68=>{
        var _0x59203c = _0x26f487;
        _0x45b9ce[_0x59203c(0x1f7)] = _0xef0b68,
        _0x45b9ce[_0x59203c(0x1e9)]();
    }
    );
}
  , toggleMode = _0x2c0f14=>{
    var _0xec4fcb = _0x14bc;
    if (_0x2c0f14 === modes[_0xec4fcb(0x1df)])
        currentMode === modes[_0xec4fcb(0x1df)] ? currentMode = '' : (currentMode = modes[_0xec4fcb(0x1df)],
        canvas[_0xec4fcb(0x280)] = ![],
        canvas[_0xec4fcb(0x1e9)]());
    else
        _0x2c0f14 === modes[_0xec4fcb(0x23a)] && (currentMode === modes['drawing'] ? (currentMode = '',
        canvas[_0xec4fcb(0x280)] = ![],
        canvas[_0xec4fcb(0x1e9)]()) : (currentMode = modes[_0xec4fcb(0x23a)],
        canvas[_0xec4fcb(0x235)][_0xec4fcb(0x21b)] = color,
        canvas[_0xec4fcb(0x280)] = !![],
        canvas[_0xec4fcb(0x1e9)]()));
    console[_0xec4fcb(0x27a)](_0x2c0f14);
}
  , setPanEvents = _0x4c4b3a=>{
    var _0x4a44fa = _0x14bc;
    _0x4c4b3a['on']('mouse:move', _0x22b90d=>{
        var _0x23b82b = _0x14bc;
        if (mousePressed && currentMode === modes[_0x23b82b(0x1df)]) {
            _0x4c4b3a['setCursor'](_0x23b82b(0x250)),
            _0x4c4b3a[_0x23b82b(0x1e9)]();
            const _0x12ec01 = _0x22b90d
              , _0xd922d3 = new fabric[(_0x23b82b(0x1ed))](_0x12ec01[_0x23b82b(0x218)],_0x12ec01[_0x23b82b(0x25d)]);
            _0x4c4b3a['relativePan'](_0xd922d3);
        }
    }
    ),
    _0x4c4b3a['on'](_0x4a44fa(0x23c), _0x5ccec2=>{
        var _0x1da3e3 = _0x4a44fa;
        mousePressed = !![],
        currentMode === modes['pan'] && (_0x4c4b3a['setCursor'](_0x1da3e3(0x250)),
        _0x4c4b3a[_0x1da3e3(0x1e9)]());
    }
    ),
    _0x4c4b3a['on'](_0x4a44fa(0x1e4), _0x340ad1=>{
        var _0x4be4da = _0x4a44fa;
        mousePressed = ![],
        _0x4c4b3a[_0x4be4da(0x243)](_0x4be4da(0x288)),
        _0x4c4b3a[_0x4be4da(0x1e9)]();
    }
    ),
    _0x4c4b3a['on'](_0x4a44fa(0x272), _0x328e73=>{
        var _0xc69f0c = _0x4a44fa;
        _0x328e73['e'][_0xc69f0c(0x285)](),
        fabric[_0xc69f0c(0x1e1)][_0xc69f0c(0x22d)](myImageSRC, function(_0x1e9827) {
            var _0x4ee238 = _0xc69f0c;
            _0x1e9827['left'] = _0x328e73['e']['layerX'],
            _0x1e9827[_0x4ee238(0x215)] = _0x328e73['e']['layerY'],
            _0x4c4b3a[_0x4ee238(0x20b)](_0x1e9827);
        });
    }
    );
}
  , clearCanvas = (_0x11adff,_0x2c1d60)=>{
    var _0x6c4ddd = _0x14bc;
    _0x2c1d60[_0x6c4ddd(0x24c)] = _0x11adff['toSVG'](),
    _0x11adff[_0x6c4ddd(0x1fc)]()[_0x6c4ddd(0x1f5)](_0x4f7446=>{
        var _0x11ccd0 = _0x6c4ddd;
        _0x4f7446 !== _0x11adff[_0x11ccd0(0x1f7)] && _0x11adff[_0x11ccd0(0x1e2)](_0x4f7446);
    }
    );
}
  , restoreCanvas = (_0x725a04,_0x29b7b3,_0x2edec8)=>{
    var _0x182726 = _0x14bc
      , _0x343bf3 = _0x725a04[_0x182726(0x1ee)]();
    _0x29b7b3[_0x182726(0x24c)] && fabric['loadSVGFromString'](_0x29b7b3[_0x182726(0x24c)], _0x53e51e=>{
        var _0x2b6d10 = _0x182726;
        _0x53e51e = _0x53e51e[_0x2b6d10(0x20e)](_0x5339aa=>_0x5339aa['xlink:href'] !== _0x2edec8),
        _0x725a04[_0x2b6d10(0x20b)](..._0x53e51e),
        _0x725a04[_0x2b6d10(0x268)]();
    }
    );
}
;
function deleteSelectedObjectsFromCanvas() {
    var _0x26a559 = _0x14bc
      , _0x4e29f9 = canvas[_0x26a559(0x1ee)]();
    _0x4e29f9[_0x26a559(0x263)] === _0x26a559(0x269) ? _0x4e29f9[_0x26a559(0x27c)](function(_0x43847d) {
        var _0xbee9c = _0x26a559;
        console[_0xbee9c(0x27a)](_0x43847d),
        canvas[_0xbee9c(0x1e2)](_0x43847d);
    }) : canvas['remove'](_0x4e29f9),
    canvas[_0x26a559(0x282)](),
    canvas[_0x26a559(0x268)]();
}
function groupObjects() {
    var _0x3a97b7 = _0x14bc;
    if (!canvas[_0x3a97b7(0x1ee)]())
        return;
    if (canvas[_0x3a97b7(0x1ee)]()['type'] !== 'activeSelection')
        return;
    canvas[_0x3a97b7(0x1ee)]()[_0x3a97b7(0x1fe)](),
    canvas['requestRenderAll']();
}
function ungroupObjects() {
    var _0x420618 = _0x14bc;
    if (!canvas[_0x420618(0x1ee)]())
        return;
    if (canvas[_0x420618(0x1ee)]()[_0x420618(0x263)] !== _0x420618(0x204))
        return;
    canvas[_0x420618(0x1ee)]()['toActiveSelection'](),
    canvas[_0x420618(0x268)]();
}
const imgAdded = _0x40de00=>{
    var _0x26b259 = _0x14bc;
    console['log'](_0x40de00);
    const _0x481683 = document[_0x26b259(0x1fa)](_0x26b259(0x222))
      , _0x5c305a = _0x481683[_0x26b259(0x296)][0x0];
    reader[_0x26b259(0x297)](_0x5c305a);
}
  , reader = new FileReader()
  , inputfile = document[_0x4f691c(0x1fa)](_0x4f691c(0x222));
inputfile[_0x4f691c(0x233)](_0x4f691c(0x1e3), imgAdded),
reader[_0x4f691c(0x233)](_0x4f691c(0x1e6), ()=>{
    var _0x471225 = _0x4f691c;
    console[_0x471225(0x27a)](reader[_0x471225(0x23e)]),
    fabric[_0x471225(0x1e1)]['fromURL'](reader[_0x471225(0x23e)], _0x111960=>{
        var _0x1f1f63 = _0x471225;
        canvas[_0x1f1f63(0x20b)](_0x111960),
        canvas[_0x1f1f63(0x268)]();
    }
    );
}
);
var img = document[_0x4f691c(0x28b)](_0x4f691c(0x229))
  , imageSaver = document[_0x4f691c(0x1fa)]('lnkDownload');
imageSaver['addEventListener'](_0x4f691c(0x1ef), saveImage, ![]);
function saveImage(_0x2895f4) {
    var _0x32b7a2 = _0x4f691c;
    this[_0x32b7a2(0x213)] = canvas[_0x32b7a2(0x1ec)]({
        'format': _0x32b7a2(0x242),
        'quality': 0.8
    }),
    this[_0x32b7a2(0x24a)] = _0x32b7a2(0x287);
}
const canvas = initCanvas('zbcanvas');
let ctx = canvas[_0x4f691c(0x267)]('2d');
const svgState = {};
let mousePressed = ![]
  , color = _0x4f691c(0x251);
const group = {}
  , bgUrl = '';
let currentMode;
const modes = {
    'pan': _0x4f691c(0x1df),
    'drawing': _0x4f691c(0x23a)
};
setBackground(bgUrl, canvas),
setPanEvents(canvas);
var deleteIcon = _0x4f691c(0x237)
  , cloneIcon = _0x4f691c(0x275)
  , deleteImg = document[_0x4f691c(0x28b)]('img');
deleteImg['src'] = deleteIcon;
var cloneImg = document[_0x4f691c(0x28b)](_0x4f691c(0x229));
cloneImg[_0x4f691c(0x231)] = cloneIcon,
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)][_0x4f691c(0x1ea)] = ![],
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)][_0x4f691c(0x24e)] = _0x4f691c(0x20f),
fabric['Object'][_0x4f691c(0x21a)][_0x4f691c(0x22a)] = 'circle',
fabric['Object'][_0x4f691c(0x21a)][_0x4f691c(0x294)] = _0x4f691c(0x295),
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)]['cornerSize'] = 0xc,
fabric['Object'][_0x4f691c(0x21a)][_0x4f691c(0x223)] = 0xa,
fabric[_0x4f691c(0x25c)]['prototype'][_0x4f691c(0x28e)] = [0x3, 0x3],
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)][_0x4f691c(0x278)] = ![],
canvas[_0x4f691c(0x210)] = !![],
fabric[_0x4f691c(0x1f4)] = 0xd693a40,
fabric[_0x4f691c(0x236)] = 0xa7d8c0;
const addtext = _0x47e60d=>{
    var _0xb852d6 = _0x4f691c;
    const _0x9e4222 = _0x47e60d[_0xb852d6(0x28f)]()
      , _0x23d6ec = new fabric['IText'](_0xb852d6(0x26c),{
        'left': 0x32,
        'top': 0x64,
        'fontFamily': _0xb852d6(0x245),
        'fill': _0xb852d6(0x234),
        'fontSize': 0x2d,
        'left': _0x9e4222[_0xb852d6(0x20a)],
        'top': _0x9e4222[_0xb852d6(0x215)],
        'originX': 'center',
        'originY': _0xb852d6(0x1f6)
    });
    _0x47e60d['add'](_0x23d6ec),
    _0x47e60d['centerObject'](_0x23d6ec),
    _0x47e60d[_0xb852d6(0x24f)](_0x23d6ec),
    _0x47e60d[_0xb852d6(0x268)]();
}
  , addtextarea = _0x1f3b56=>{
    var _0x3c528d = _0x4f691c;
    const _0x301fb4 = _0x1f3b56[_0x3c528d(0x28f)]()
      , _0x77f313 = new fabric[(_0x3c528d(0x216))]('The\x20standard\x20chunk\x20of\x20Lorem\x20Ipsum\x20used\x20since\x20the\x201500s\x20is\x20reproduced\x20below\x20for\x20those\x20interested.\x20Sections\x201.10.32\x20and\x201.10.33\x20from\x20\x22de\x20Finibus\x20Bonorum\x20et\x20Malorum\x22\x20by\x20Cicero\x20are\x20also\x20reproduced\x20in\x20their\x20exact\x20original\x20form,\x20accompanied\x20by\x20English\x20versions\x20from\x20the\x201914\x20translation\x20by\x20H.\x20Rackham.',{
        'width': 0xc8,
        'height': 0xc8,
        'left': 0x32,
        'top': 0x64,
        'fontFamily': 'Arial',
        'fill': '#333',
        'fontSize': 0x10,
        'left': _0x301fb4['left'],
        'top': _0x301fb4[_0x3c528d(0x215)],
        'originX': _0x3c528d(0x1f6),
        'originY': _0x3c528d(0x1f6)
    });
    _0x1f3b56['add'](_0x77f313),
    _0x1f3b56[_0x3c528d(0x246)](_0x77f313),
    _0x1f3b56[_0x3c528d(0x24f)](_0x77f313),
    _0x1f3b56[_0x3c528d(0x268)]();
}
;
$(_0x4f691c(0x205))[_0x4f691c(0x1ef)](function() {
    var _0x2c3560 = _0x4f691c
      , _0x3d3178 = $(this)[_0x2c3560(0x247)](_0x2c3560(0x208));
    if (_0x3d3178 != '')
        switch (_0x3d3178) {
        case 'rectangle':
            var _0x2a714e = canvas['getCenter']()
              , _0x44a3d6 = new fabric[(_0x2c3560(0x25f))]({
                'width': 0x64,
                'height': 0x64,
                'fill': '',
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'strokeLineJoin': _0x2c3560(0x26e),
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': _0x2c3560(0x1f6),
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0x44a3d6),
            canvas[_0x2c3560(0x246)](_0x44a3d6),
            canvas[_0x2c3560(0x24f)](_0x44a3d6);
            break;
        case _0x2c3560(0x289):
            var _0x2a714e = canvas[_0x2c3560(0x28f)]()
              , _0x4a46be = new fabric[(_0x2c3560(0x266))]({
                'radius': 0x32,
                'fill': '',
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': _0x2c3560(0x1f6),
                'strokeUniform': !![]
            });
            canvas['add'](_0x4a46be),
            canvas[_0x2c3560(0x246)](_0x4a46be),
            canvas[_0x2c3560(0x24f)](_0x4a46be);
            break;
        case _0x2c3560(0x228):
            var _0x2a714e = canvas['getCenter']()
              , _0x3382f0 = new fabric['Ellipse']({
                'rx': 0x50,
                'ry': 0x28,
                'fill': '',
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': 'center',
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0x3382f0),
            canvas[_0x2c3560(0x246)](_0x3382f0),
            canvas['setActiveObject'](_0x4a46be);
            break;
        case _0x2c3560(0x255):
            var _0x2a714e = canvas[_0x2c3560(0x28f)]()
              , _0x52f195 = new fabric[(_0x2c3560(0x219))]({
                'width': 0x96,
                'height': 0x64,
                'fill': '',
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': 'center',
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0x52f195),
            canvas['centerObject'](_0x52f195),
            canvas[_0x2c3560(0x24f)](_0x52f195),
            canvas[_0x2c3560(0x268)]();
            break;
        case 'hexagon':
            var _0x94c529 = [{
                'x': -0x64,
                'y': -0x32
            }, {
                'x': 0x64,
                'y': -0x32
            }, {
                'x': 0x96,
                'y': 0x32
            }, {
                'x': -0x96,
                'y': 0x32
            }]
              , _0xbfa4b4 = [{
                'x': 0x352,
                'y': 0x4b
            }, {
                'x': 0x3be,
                'y': 137.5
            }, {
                'x': 0x3be,
                'y': 262.5
            }, {
                'x': 0x352,
                'y': 0x145
            }, {
                'x': 0x2e6,
                'y': 262.5
            }, {
                'x': 0x2e6,
                'y': 137.5
            }]
              , _0x15cad7 = [{
                'x': 0x0,
                'y': 0x0
            }, {
                'x': 0x64,
                'y': 0x32
            }, {
                'x': 0xc8,
                'y': 0x0
            }, {
                'x': 0x96,
                'y': 0x64
            }, {
                'x': 0xc8,
                'y': 0xc8
            }, {
                'x': 0x64,
                'y': 0x96
            }, {
                'x': 0x0,
                'y': 0xc8
            }, {
                'x': 0x32,
                'y': 0x64
            }, {
                'x': 0x0,
                'y': 0x0
            }]
              , _0x4aba06 = [{
                'x': 0x15e,
                'y': 0x4b
            }, {
                'x': 0x17c,
                'y': 0xa0
            }, {
                'x': 0x1d6,
                'y': 0xa0
            }, {
                'x': 0x190,
                'y': 0xd7
            }, {
                'x': 0x1a7,
                'y': 0x12d
            }, {
                'x': 0x15e,
                'y': 0xfa
            }, {
                'x': 0x115,
                'y': 0x12d
            }, {
                'x': 0x12f,
                'y': 0xd7
            }, {
                'x': 0xe7,
                'y': 0xa1
            }, {
                'x': 0x141,
                'y': 0xa1
            }]
              , _0xfe5cc5 = new Array(_0x94c529,_0xbfa4b4,_0x15cad7,_0x4aba06)
              , _0x2a714e = canvas[_0x2c3560(0x28f)]()
              , _0x5003bc = new fabric[(_0x2c3560(0x21d))](_0xfe5cc5[0x1],{
                'top': 0xb4,
                'left': 0xc8,
                'fill': '',
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': 'center',
                'strokeUniform': !![]
            });
            canvas['add'](_0x5003bc),
            canvas[_0x2c3560(0x246)](_0x5003bc),
            canvas[_0x2c3560(0x24f)](_0x5003bc),
            canvas[_0x2c3560(0x268)]();
            break;
        case _0x2c3560(0x217):
            var _0xb80ac1 = _0x4ecddb(0x5, 0x32, 0x19)
              , _0x2a714e = canvas[_0x2c3560(0x28f)]()
              , _0x5930c7 = new fabric[(_0x2c3560(0x21d))](_0xb80ac1,{
                'fill': '',
                'stroke': 'black',
                'left': 0x64,
                'top': 0xa,
                'strokeWidth': 0x1,
                'strokeLineJoin': 'bevil',
                'left': _0x2a714e['left'],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': _0x2c3560(0x1f6),
                'originY': _0x2c3560(0x1f6),
                'strokeUniform': !![]
            },![]);
            canvas['add'](_0x5930c7),
            canvas[_0x2c3560(0x246)](_0x5930c7),
            canvas[_0x2c3560(0x24f)](_0x5930c7),
            canvas[_0x2c3560(0x268)]();
            function _0x24e173(_0x1dc04c, _0x5c0b58) {
                var _0x36a13d = _0x2c3560
                  , _0x50a16b = Math['PI'] * 0x2 / _0x1dc04c
                  , _0x58e202 = _0x5c0b58
                  , _0x3dbbf5 = _0x5c0b58
                  , _0xa73cb9 = [];
                for (var _0x1b23b6 = 0x0; _0x1b23b6 < _0x1dc04c; _0x1b23b6++) {
                    var _0x55e353 = _0x58e202 + _0x5c0b58 * Math[_0x36a13d(0x241)](_0x1b23b6 * _0x50a16b)
                      , _0x22c464 = _0x3dbbf5 + _0x5c0b58 * Math['sin'](_0x1b23b6 * _0x50a16b);
                    _0xa73cb9[_0x36a13d(0x1f8)]({
                        'x': _0x55e353,
                        'y': _0x22c464
                    });
                }
                return _0xa73cb9;
            }
            ;function _0x4ecddb(_0x2f9d2b, _0x2286ee, _0xcd5872) {
                var _0x45cc16 = _0x2c3560
                  , _0x5f4511 = Math['PI'] / 0x2 * 0x3
                  , _0x45902d = _0x2286ee
                  , _0x24defe = _0x2286ee
                  , _0x3a79f7 = Math['PI'] / _0x2f9d2b
                  , _0x3885b1 = []
                  , _0x21841e = 0x0;
                for (var _0x33a2cb = 0x0; _0x33a2cb < _0x2f9d2b; _0x33a2cb++) {
                    var _0x5a0571 = _0x45902d + Math['cos'](_0x21841e) * _0x2286ee
                      , _0x14a61a = _0x24defe + Math['sin'](_0x21841e) * _0x2286ee;
                    _0x3885b1[_0x45cc16(0x1f8)]({
                        'x': _0x5a0571,
                        'y': _0x14a61a
                    }),
                    _0x21841e += _0x3a79f7,
                    _0x5a0571 = _0x45902d + Math[_0x45cc16(0x241)](_0x21841e) * _0xcd5872,
                    _0x14a61a = _0x24defe + Math[_0x45cc16(0x200)](_0x21841e) * _0xcd5872,
                    _0x3885b1['push']({
                        'x': _0x5a0571,
                        'y': _0x14a61a
                    }),
                    _0x21841e += _0x3a79f7;
                }
                return _0x3885b1;
            }
            break;
        case _0x2c3560(0x274):
            var _0x2a714e = canvas[_0x2c3560(0x28f)]()
              , _0xbc7fa1 = new fabric['Polyline']([{
                'x': 0xc8,
                'y': 0xa
            }, {
                'x': 0xfa,
                'y': 0x32
            }, {
                'x': 0xfa,
                'y': 0xb4
            }, {
                'x': 0x96,
                'y': 0xb4
            }, {
                'x': 0x96,
                'y': 0x32
            }, {
                'x': 0xc8,
                'y': 0xa
            }],{
                'stroke': _0x2c3560(0x212),
                'strokeWidth': 0x1,
                'fill': '',
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e['top'],
                'originX': 'center',
                'originY': 'center',
                'statefullCache': _0x2c3560(0x26d),
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0xbc7fa1),
            canvas['centerObject'](_0xbc7fa1),
            canvas['setActiveObject'](_0xbc7fa1),
            canvas[_0x2c3560(0x268)]();
            break;
        case _0x2c3560(0x225):
            var _0x2a714e = canvas['getCenter']()
              , _0x44c31d = new fabric[(_0x2c3560(0x25f))]({
                'left': 0x64,
                'top': 0x32,
                'fill': '',
                'width': 0x32,
                'height': 0x32,
                'stroke': _0x2c3560(0x212),
                'rx': 0xa,
                'ry': 0xa,
                'angle': 0x2d,
                'scaleX': 0x3,
                'scaleY': 0x3,
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': 'center',
                'originY': _0x2c3560(0x1f6),
                'hasControls': !![],
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0x44c31d),
            canvas[_0x2c3560(0x246)](_0x44c31d),
            canvas[_0x2c3560(0x24f)](_0x44c31d),
            canvas[_0x2c3560(0x268)]();
            break;
        case 'line':
            var _0x2a714e = canvas['getCenter']()
              , _0x4bb52f = new fabric['Line']([0x32, 0xa, 0xc8, 0x96],{
                'stroke': _0x2c3560(0x212),
                'left': _0x2a714e[_0x2c3560(0x20a)],
                'top': _0x2a714e[_0x2c3560(0x215)],
                'originX': 'center',
                'originY': 'center',
                'hasControls': !![],
                'strokeUniform': !![]
            });
            canvas[_0x2c3560(0x20b)](_0x4bb52f),
            canvas[_0x2c3560(0x246)](_0x4bb52f),
            canvas[_0x2c3560(0x24f)](_0x4bb52f),
            canvas[_0x2c3560(0x268)]();
            break;
        }
});
function renderIcon(_0x121cbf) {
    return function _0x19644c(_0x2e009a, _0x36834b, _0x238a6c, _0x1c1034, _0x4a430b) {
        var _0x300fd5 = _0x14bc
          , _0x203844 = this['cornerSize'];
        _0x2e009a[_0x300fd5(0x27b)](),
        _0x2e009a[_0x300fd5(0x270)](_0x36834b, _0x238a6c),
        _0x2e009a[_0x300fd5(0x265)](fabric[_0x300fd5(0x214)][_0x300fd5(0x220)](_0x4a430b[_0x300fd5(0x292)])),
        _0x2e009a[_0x300fd5(0x230)](_0x121cbf, -_0x203844 / 0x2, -_0x203844 / 0x2, _0x203844, _0x203844),
        _0x2e009a[_0x300fd5(0x26b)]();
    }
    ;
}
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)][_0x4f691c(0x23d)]['deleteControl'] = new fabric['Control']({
    'x': 0.5,
    'y': -0.5,
    'offsetY': -0x10,
    'offsetX': 0x10,
    'cursorStyle': _0x4f691c(0x261),
    'mouseUpHandler': deleteObject,
    'render': renderIcon(deleteImg),
    'cornerSize': 0x18
}),
fabric[_0x4f691c(0x25c)][_0x4f691c(0x21a)][_0x4f691c(0x23d)][_0x4f691c(0x226)] = new fabric[(_0x4f691c(0x22c))]({
    'x': -0.5,
    'y': -0.5,
    'offsetY': -0x10,
    'offsetX': -0x10,
    'cursorStyle': _0x4f691c(0x261),
    'mouseUpHandler': cloneObject,
    'render': renderIcon(cloneImg),
    'cornerSize': 0x18
});
function deleteObject(_0x16fa7c, _0x1df742) {
    var _0xb2eb6b = _0x4f691c
      , _0x3a947d = _0x1df742[_0xb2eb6b(0x249)]
      , _0x5a0de0 = _0x3a947d[_0xb2eb6b(0x281)];
    _0x5a0de0[_0xb2eb6b(0x1e2)](_0x3a947d),
    _0x5a0de0[_0xb2eb6b(0x1e9)]();
}
function cloneObject(_0x2cacf8, _0x371e47) {
    var _0xb3897b = _0x4f691c
      , _0x5c23f6 = _0x371e47[_0xb3897b(0x249)]
      , _0xb0df09 = _0x5c23f6['canvas'];
    _0x5c23f6['clone'](function(_0x4e05f1) {
        var _0x52265d = _0xb3897b;
        _0x4e05f1['left'] += 0xa,
        _0x4e05f1[_0x52265d(0x215)] += 0xa,
        _0xb0df09[_0x52265d(0x20b)](_0x4e05f1);
    });
}
document[_0x4f691c(0x1fa)](_0x4f691c(0x22f))[_0x4f691c(0x1de)] = function() {
    var _0x47d61f = _0x4f691c;
    console[_0x47d61f(0x27a)](this[_0x47d61f(0x24c)]),
    canvas['setBackgroundColor'](this[_0x47d61f(0x24c)]),
    canvas['renderAll']();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x259))[_0x4f691c(0x233)](_0x4f691c(0x1e3), function(_0x382039) {
    var _0x480c89 = _0x4f691c
      , _0x33f7d6 = _0x382039[_0x480c89(0x249)][_0x480c89(0x296)][0x0]
      , _0x7266d0 = new FileReader();
    _0x7266d0['onload'] = function(_0x3a008f) {
        var _0x48e755 = _0x480c89
          , _0x3e533a = _0x3a008f[_0x48e755(0x249)][_0x48e755(0x23e)];
        fabric[_0x48e755(0x1e1)]['fromURL'](_0x3e533a, function(_0x156c8a) {
            var _0x150874 = _0x48e755;
            canvas[_0x150874(0x1fd)](_0x156c8a, canvas[_0x150874(0x1e9)][_0x150874(0x232)](canvas), {
                'scaleX': canvas['width'] / _0x156c8a[_0x150874(0x26a)],
                'scaleY': canvas['height'] / _0x156c8a[_0x150874(0x1e7)]
            });
        });
    }
    ,
    _0x7266d0[_0x480c89(0x297)](_0x33f7d6);
});
function _0x14bc(_0x605237, _0x29635c) {
    var _0x4aa971 = _0x4aa9();
    return _0x14bc = function(_0x14bc71, _0x1073c7) {
        _0x14bc71 = _0x14bc71 - 0x1dd;
        var _0x2277cc = _0x4aa971[_0x14bc71];
        return _0x2277cc;
    }
    ,
    _0x14bc(_0x605237, _0x29635c);
}
function additioncan(_0x18fd4a) {
    var _0xebdbcf = _0x4f691c
      , _0x9dade3 = document[_0xebdbcf(0x1fa)]('zbcanvas')
      , _0x55c222 = document[_0xebdbcf(0x1eb)]('upper-canvas')[0x0]
      , _0xf60d5f = document[_0xebdbcf(0x1fa)](_0xebdbcf(0x20c));
    result = _0xf60d5f;
    var _0x5f5417 = 0x0;
    _0x5f5417 = parseInt(result[_0xebdbcf(0x24c)]),
    _0x5f5417 = _0x5f5417 + 0x1,
    result['value'] = _0x5f5417,
    console[_0xebdbcf(0x27a)](_0x5f5417),
    console[_0xebdbcf(0x27a)](_0xf60d5f['value']);
    var _0x22a55a = _0x5f5417;
    _0x9dade3[_0xebdbcf(0x201)][_0xebdbcf(0x26a)] = _0x22a55a + 'px',
    _0x55c222[_0xebdbcf(0x201)][_0xebdbcf(0x26a)] = _0x22a55a + 'px',
    canvas[_0xebdbcf(0x1e9)]();
}
function substcan(_0x1198db) {
    var _0x2bff8b = _0x4f691c
      , _0x68bcf = document[_0x2bff8b(0x1fa)](_0x2bff8b(0x207))
      , _0x4bd104 = document[_0x2bff8b(0x1eb)](_0x2bff8b(0x203))[0x0]
      , _0x3fcb99 = document[_0x2bff8b(0x1fa)](_0x2bff8b(0x20c));
    result = _0x3fcb99;
    var _0x410738 = 0x0;
    _0x410738 = parseInt(result[_0x2bff8b(0x24c)]),
    _0x410738 = _0x410738 - 0x1,
    result['value'] = _0x410738,
    console[_0x2bff8b(0x27a)](_0x410738),
    console['log'](_0x3fcb99['value']);
    var _0x5af0de = _0x410738;
    _0x68bcf[_0x2bff8b(0x201)]['width'] = _0x5af0de + 'px',
    _0x4bd104[_0x2bff8b(0x201)][_0x2bff8b(0x26a)] = _0x5af0de + 'px',
    canvas['renderAll']();
}
function additioncanhie(_0x2bbe5d) {
    var _0x4aec3d = _0x4f691c
      , _0x32d4ff = document[_0x4aec3d(0x1fa)](_0x4aec3d(0x207))
      , _0xcfc654 = document[_0x4aec3d(0x1eb)](_0x4aec3d(0x203))[0x0]
      , _0x24b645 = document[_0x4aec3d(0x1fa)](_0x4aec3d(0x293));
    result = _0x24b645;
    var _0x1759bc = 0x0;
    _0x1759bc = parseInt(result['value']),
    _0x1759bc = _0x1759bc + 0x1,
    result['value'] = _0x1759bc;
    var _0x225b64 = _0x1759bc;
    _0x32d4ff[_0x4aec3d(0x201)][_0x4aec3d(0x1e7)] = _0x225b64 + 'px',
    _0xcfc654[_0x4aec3d(0x201)][_0x4aec3d(0x1e7)] = _0x225b64 + 'px',
    canvas[_0x4aec3d(0x1e9)]();
}
function substcanhie(_0x193164) {
    var _0x102c6b = _0x4f691c
      , _0x5639a5 = document[_0x102c6b(0x1fa)]('zbcanvas')
      , _0x4c85c6 = document['getElementsByClassName']('upper-canvas')[0x0]
      , _0x9e621a = document[_0x102c6b(0x1fa)]('enterCanvasHeight');
    result = _0x9e621a;
    var _0x24fc5c = 0x0;
    _0x24fc5c = parseInt(result[_0x102c6b(0x24c)]),
    _0x24fc5c = _0x24fc5c - 0x1,
    result[_0x102c6b(0x24c)] = _0x24fc5c;
    var _0x211a1d = _0x24fc5c;
    _0x5639a5[_0x102c6b(0x201)][_0x102c6b(0x1e7)] = _0x211a1d + 'px',
    _0x4c85c6[_0x102c6b(0x201)][_0x102c6b(0x1e7)] = _0x211a1d + 'px',
    canvas[_0x102c6b(0x1e9)]();
}
radios5 = document[_0x4f691c(0x248)]('fonttype');
for (var i = 0x0, max = radios5[_0x4f691c(0x254)]; i < max; i++) {
    radios5[i][_0x4f691c(0x27d)] = function() {
        var _0x5bcf82 = _0x4f691c;
        document[_0x5bcf82(0x1fa)](this['id'])[_0x5bcf82(0x290)] == !![] ? (this['id'] == _0x5bcf82(0x21f) && canvas[_0x5bcf82(0x1ee)]()['set']('fontWeight', _0x5bcf82(0x23b)),
        this['id'] == 'text-cmd-italic' && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)]('fontStyle', _0x5bcf82(0x273)),
        this['id'] == _0x5bcf82(0x1f0) && (canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)](_0x5bcf82(0x1dd), !![]),
        console[_0x5bcf82(0x27a)](this['id'])),
        this['id'] == _0x5bcf82(0x28d) && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)](_0x5bcf82(0x253), !![]),
        this['id'] == _0x5bcf82(0x1f9) && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)](_0x5bcf82(0x1f3), !![])) : (this['id'] == _0x5bcf82(0x21f) && canvas[_0x5bcf82(0x1ee)]()['set'](_0x5bcf82(0x260), ''),
        this['id'] == 'text-cmd-italic' && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)]('fontStyle', ''),
        this['id'] == _0x5bcf82(0x1f0) && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)](_0x5bcf82(0x1dd), ![]),
        this['id'] == 'text-cmd-linethrough' && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)](_0x5bcf82(0x253), ![]),
        this['id'] == _0x5bcf82(0x1f9) && canvas[_0x5bcf82(0x1ee)]()[_0x5bcf82(0x244)]('overline', ![])),
        canvas[_0x5bcf82(0x1e9)]();
    }
    ;
}
;document['getElementById'](_0x4f691c(0x24b))[_0x4f691c(0x1de)] = function() {
    var _0x5da64a = _0x4f691c;
    console[_0x5da64a(0x27a)](this[_0x5da64a(0x24c)]),
    canvas[_0x5da64a(0x1ee)]()[_0x5da64a(0x244)](_0x5da64a(0x28c), this[_0x5da64a(0x24c)]),
    canvas[_0x5da64a(0x1e9)]();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x240))['onchange'] = function() {
    var _0x288ae6 = _0x4f691c;
    canvas[_0x288ae6(0x1ee)]()[_0x288ae6(0x244)]('fontFamily', this[_0x288ae6(0x24c)]),
    canvas['renderAll']();
}
,
document['getElementById'](_0x4f691c(0x1ff))[_0x4f691c(0x1de)] = function() {
    var _0xa612fc = _0x4f691c;
    canvas['getActiveObject']()[_0xa612fc(0x244)]('fontSize', this[_0xa612fc(0x24c)]),
    canvas[_0xa612fc(0x1e9)]();
}
;
function txtwidplus(_0x192261) {
    var _0x232ff = _0x4f691c;
    result = document[_0x232ff(0x1fa)](_0x232ff(0x1ff));
    var _0xf72f5d = 0x0;
    _0xf72f5d = parseInt(result['value']),
    _0xf72f5d = _0xf72f5d + 0x1,
    result[_0x232ff(0x24c)] = _0xf72f5d,
    console[_0x232ff(0x27a)](_0xf72f5d),
    canvas[_0x232ff(0x1ee)]()[_0x232ff(0x244)](_0x232ff(0x25a), result[_0x232ff(0x24c)]),
    canvas[_0x232ff(0x1e9)]();
}
function txtwidminus(_0x13e0cf) {
    var _0x490057 = _0x4f691c;
    result = document[_0x490057(0x1fa)](_0x490057(0x1ff));
    var _0x55e078 = 0x0;
    _0x55e078 = parseInt(result['value']),
    _0x55e078 = _0x55e078 - 0x1,
    result['value'] = _0x55e078,
    console['log'](_0x55e078),
    canvas['getActiveObject']()[_0x490057(0x244)](_0x490057(0x25a), result['value']),
    canvas[_0x490057(0x1e9)]();
}
function txtstrokeplus(_0x24a5ed) {
    var _0xba9664 = _0x4f691c;
    result = document[_0xba9664(0x1fa)](_0xba9664(0x279));
    var _0x224209 = 0x0;
    _0x224209 = parseInt(result['value']),
    _0x224209 = _0x224209 + 0x1,
    result[_0xba9664(0x24c)] = _0x224209,
    console[_0xba9664(0x27a)](_0x224209),
    canvas[_0xba9664(0x1ee)]()[_0xba9664(0x244)](_0xba9664(0x239), result[_0xba9664(0x24c)]),
    canvas[_0xba9664(0x1e9)]();
}
function txtstrokeminus(_0x36e851) {
    var _0x3a27b7 = _0x4f691c;
    result = document[_0x3a27b7(0x1fa)](_0x3a27b7(0x279));
    var _0x1f2c00 = 0x0;
    _0x1f2c00 = parseInt(result[_0x3a27b7(0x24c)]),
    _0x1f2c00 = _0x1f2c00 - 0x1,
    result[_0x3a27b7(0x24c)] = _0x1f2c00,
    console[_0x3a27b7(0x27a)](_0x1f2c00),
    canvas[_0x3a27b7(0x1ee)]()[_0x3a27b7(0x244)](_0x3a27b7(0x239), result['value']),
    canvas[_0x3a27b7(0x1e9)]();
}
document[_0x4f691c(0x1fa)]('text-align')[_0x4f691c(0x1de)] = function() {
    var _0x29c467 = _0x4f691c;
    canvas[_0x29c467(0x1ee)]()[_0x29c467(0x244)](_0x29c467(0x25e), this['value']),
    canvas[_0x29c467(0x1e9)]();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x20d))['onchange'] = function() {
    var _0x543da2 = _0x4f691c;
    console[_0x543da2(0x27a)](this[_0x543da2(0x24c)]),
    canvas[_0x543da2(0x1ee)]()[_0x543da2(0x244)]('textBackgroundColor', this[_0x543da2(0x24c)]),
    canvas[_0x543da2(0x1e9)]();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x257))['onchange'] = function() {
    var _0x2b2e30 = _0x4f691c;
    console['log'](this['value']),
    canvas['getActiveObject']()[_0x2b2e30(0x244)](_0x2b2e30(0x221), this['value']),
    canvas[_0x2b2e30(0x1e9)]();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x27e))['onchange'] = function() {
    var _0x5cc529 = _0x4f691c;
    console['log'](this[_0x5cc529(0x24c)]),
    canvas[_0x5cc529(0x1ee)]()['set'](_0x5cc529(0x28c), this[_0x5cc529(0x24c)]),
    canvas[_0x5cc529(0x1e9)]();
}
,
document[_0x4f691c(0x1fa)](_0x4f691c(0x262))[_0x4f691c(0x1de)] = function() {
    var _0x473318 = _0x4f691c;
    console['log'](this[_0x473318(0x24c)]),
    canvas[_0x473318(0x1ee)]()[_0x473318(0x244)](_0x473318(0x221), this[_0x473318(0x24c)]),
    canvas['renderAll']();
}
,
$(_0x4f691c(0x22b))[_0x4f691c(0x1e3)](function() {
    var _0x58285f = _0x4f691c
      , _0x3ba1a0 = parseInt($(this)['val']())
      , _0x36288d = canvas[_0x58285f(0x1ee)]();
    if (_0x36288d == undefined)
        return alert(_0x58285f(0x1f2)),
        ![];
    _0x36288d[_0x58285f(0x244)]({
        'strokeWidth': _0x3ba1a0
    }),
    canvas[_0x58285f(0x1e9)]();
});
var objectToSendBack, objectBringToFront;
canvas['on'](_0x4f691c(0x271), function(_0x331b48) {
    var _0x271786 = _0x4f691c;
    objectToSendBack = _0x331b48[_0x271786(0x249)];
}),
canvas['on'](_0x4f691c(0x252), function(_0x576644) {
    var _0x3af68a = _0x4f691c;
    objectToSendBack = _0x576644[_0x3af68a(0x249)];
});
var sendSelectedObjectBack = function() {
    var _0x26d83b = _0x4f691c;
    console[_0x26d83b(0x27a)](event['target']),
    canvas[_0x26d83b(0x206)](objectToSendBack);
};
canvas['on']('selection:created', function(_0x298ebb) {
    var _0x1962bd = _0x4f691c;
    objectBringToFront = _0x298ebb[_0x1962bd(0x249)];
}),
canvas['on'](_0x4f691c(0x252), function(_0x5bfb79) {
    var _0x14e9e3 = _0x4f691c;
    objectBringToFront = _0x5bfb79[_0x14e9e3(0x249)];
});
var sendSelectedObjectforward = function() {
    var _0xbe3256 = _0x4f691c;
    console[_0xbe3256(0x27a)](event[_0xbe3256(0x249)]),
    canvas[_0xbe3256(0x21e)](objectBringToFront);
};
canvas['on'](_0x4f691c(0x271), onObjectSelected);
function _0x4aa9() {
    var _0x15b54a = ['forEach', 'center', 'backgroundImage', 'push', 'text-cmd-overline', 'getElementById', '23205490FTKkAJ', 'getObjects', 'setBackgroundImage', 'toGroup', 'text-font-size', 'sin', 'style', '28354LwCaOI', 'upper-canvas', 'group', '.add_shape', 'sendToBack', 'zbcanvas', 'data-rel', '_objects', 'left', 'add', 'enterCanvasWidth', 'text-lines-bg-color', 'filter', 'blue', 'uniformScaling', '20hxDeRV', 'black', 'href', 'util', 'top', 'Textbox', 'star', 'movementX', 'Triangle', 'prototype', 'color', 'white', 'Polygon', 'bringForward', 'text-cmd-bold', 'degreesToRadians', 'stroke', 'myImg', 'padding', 'altKey', 'diamond', 'clone', '5mCGWiH', 'ellipse', 'img', 'cornerStyle', '#control_border', 'Control', 'fromURL', 'ctrlKey', 'colorPicker2', 'drawImage', 'src', 'bind', 'addEventListener', '#333', 'freeDrawingBrush', 'maxCacheSideLimit', 'data:image/svg+xml,%3C%3Fxml\x20version=\x271.0\x27\x20encoding=\x27utf-8\x27%3F%3E%3C!DOCTYPE\x20svg\x20PUBLIC\x20\x27-//W3C//DTD\x20SVG\x201.1//EN\x27\x20\x27http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\x27%3E%3Csvg\x20version=\x271.1\x27\x20id=\x27Ebene_1\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20xmlns:xlink=\x27http://www.w3.org/1999/xlink\x27\x20x=\x270px\x27\x20y=\x270px\x27\x20width=\x27595.275px\x27\x20height=\x27595.275px\x27\x20viewBox=\x27200\x20215\x20230\x20470\x27\x20xml:space=\x27preserve\x27%3E%3Ccircle\x20style=\x27fill:%23F44336;\x27\x20cx=\x27299.76\x27\x20cy=\x27439.067\x27\x20r=\x27218.516\x27/%3E%3Cg%3E%3Crect\x20x=\x27267.162\x27\x20y=\x27307.978\x27\x20transform=\x27matrix(0.7071\x20-0.7071\x200.7071\x200.7071\x20-222.6202\x20340.6915)\x27\x20style=\x27fill:white;\x27\x20width=\x2765.545\x27\x20height=\x27262.18\x27/%3E%3Crect\x20x=\x27266.988\x27\x20y=\x27308.153\x27\x20transform=\x27matrix(0.7071\x200.7071\x20-0.7071\x200.7071\x20398.3889\x20-83.3116)\x27\x20style=\x27fill:white;\x27\x20width=\x2765.544\x27\x20height=\x27262.179\x27/%3E%3C/g%3E%3C/svg%3E', 'which', 'strokeWidth', 'drawing', 'bold', 'mouse:down', 'controls', 'result', 'display', 'font-family', 'cos', 'png', 'setCursor', 'set', 'Arial', 'centerObject', 'attr', 'getElementsByName', 'target', 'download', 'colorPicker', 'value', '15995zjrqhH', 'cornerColor', 'setActiveObject', 'grab', '#000000', 'selection:updated', 'linethrough', 'length', 'triangle', 'mydiv', 'text-stroke-color', 'toActiveSelection', 'file2', 'fontSize', 'textbox', 'Object', 'movementY', 'textAlign', 'Rect', 'fontWeight', 'pointer', 'storkeColor', 'type', 'block', 'rotate', 'Circle', 'getContext', 'requestRenderAll', 'activeSelection', 'width', 'restore', 'Tap\x20and\x20Type', 'false', 'bevil', '717289jXWYyP', 'translate', 'selection:created', 'drop', 'italic', 'pentagon', 'data:image/svg+xml,%3C%3Fxml\x20version=\x271.0\x27\x20encoding=\x27iso-8859-1\x27%3F%3E%3Csvg\x20version=\x271.1\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20xmlns:xlink=\x27http://www.w3.org/1999/xlink\x27\x20viewBox=\x270\x200\x2055.699\x2055.699\x27\x20width=\x27100px\x27\x20height=\x27100px\x27\x20xml:space=\x27preserve\x27%3E%3Cpath\x20style=\x27fill:%23010002;\x27\x20d=\x27M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1\x20c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197\x20c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177\x20c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677\x20c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z\x20M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z\x20M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845\x20c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4\x20v18.942L38.191,49.029L38.191,49.029z\x20M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z\x20M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249\x20c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637\x20c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053\x20c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399\x20v21.616C49.524,43.26,47.429,45.355,44.855,45.355z\x27/%3E%3C/svg%3E%0A', '4332yHOITG', 'shapespop', 'noScaleCache', 'text-stroke-width', 'log', 'save', 'forEachObject', 'onclick', 'colorPicker1', 'none', 'isDrawingMode', 'canvas', 'discardActiveObject', '1729071nMNZxl', 'object:added', 'preventDefault', '219CbmOap', 'canvas.png', 'default', 'circle', 'pop', 'createElement', 'fill', 'text-cmd-linethrough', 'borderDashArray', 'getCenter', 'checked', '2904320vUeEvc', 'angle', 'enterCanvasHeight', 'borderColor', 'red', 'files', 'readAsDataURL', 'underline', 'onchange', 'pan', 'i-text', 'Image', 'remove', 'change', 'mouse:up', '4470488fnGiRB', 'load', 'height', 'Canvas', 'renderAll', 'transparentCorners', 'getElementsByClassName', 'toDataURL', 'Point', 'getActiveObject', 'click', 'text-cmd-underline', 'onkeyup', 'Please\x20select\x20the\x20Object', 'overline', 'perfLimitSizeTotal'];
    _0x4aa9 = function() {
        return _0x15b54a;
    }
    ;
    return _0x4aa9();
}
function onObjectSelected() {
    var _0xf6088b = _0x4f691c
      , _0x2c4d0f = canvas[_0xf6088b(0x1ee)]()[_0xf6088b(0x263)] ? canvas[_0xf6088b(0x1ee)]()[_0xf6088b(0x263)] : '';
    console['log'](_0x2c4d0f);
    if (_0x2c4d0f == _0xf6088b(0x1e0))
        document[_0xf6088b(0x1fa)](_0xf6088b(0x256))['style']['display'] = _0xf6088b(0x264),
        document[_0xf6088b(0x1fa)](_0xf6088b(0x277))['style']['display'] = _0xf6088b(0x27f);
    else
        _0x2c4d0f == _0xf6088b(0x25b) ? (document[_0xf6088b(0x1fa)](_0xf6088b(0x256))[_0xf6088b(0x201)][_0xf6088b(0x23f)] = 'block',
        document[_0xf6088b(0x1fa)](_0xf6088b(0x277))[_0xf6088b(0x201)][_0xf6088b(0x23f)] = 'none') : (document['getElementById'](_0xf6088b(0x256))[_0xf6088b(0x201)][_0xf6088b(0x23f)] = _0xf6088b(0x27f),
        document[_0xf6088b(0x1fa)](_0xf6088b(0x277))[_0xf6088b(0x201)][_0xf6088b(0x23f)] = _0xf6088b(0x264));
}
;canvas['on']('selection:updated', onObjectSelected);
function onObjectSelected() {
    var _0x397c29 = _0x4f691c
      , _0x33ff20 = canvas[_0x397c29(0x1ee)]()['type'] ? canvas[_0x397c29(0x1ee)]()[_0x397c29(0x263)] : '';
    console['log'](_0x33ff20);
    if (_0x33ff20 == _0x397c29(0x1e0))
        document[_0x397c29(0x1fa)](_0x397c29(0x256))[_0x397c29(0x201)][_0x397c29(0x23f)] = 'block',
        document['getElementById'](_0x397c29(0x277))[_0x397c29(0x201)]['display'] = _0x397c29(0x27f);
    else
        _0x33ff20 == 'textbox' ? (document[_0x397c29(0x1fa)]('mydiv')['style'][_0x397c29(0x23f)] = 'block',
        document[_0x397c29(0x1fa)](_0x397c29(0x277))[_0x397c29(0x201)][_0x397c29(0x23f)] = 'none') : (document[_0x397c29(0x1fa)](_0x397c29(0x256))[_0x397c29(0x201)][_0x397c29(0x23f)] = _0x397c29(0x27f),
        document['getElementById'](_0x397c29(0x277))[_0x397c29(0x201)][_0x397c29(0x23f)] = _0x397c29(0x264));
}
;var isRedoing = ![]
  , h = [];
canvas['on'](_0x4f691c(0x284), function() {
    !isRedoing && (h = []),
    isRedoing = ![];
}),
document[_0x4f691c(0x1f1)] = function(_0x1dfc93) {
    var _0x563c0e = _0x4f691c;
    event['preventDefault']();
    if (_0x1dfc93[_0x563c0e(0x22e)] && _0x1dfc93[_0x563c0e(0x238)] == 0x43)
        canvas['getActiveObject']()['clone'](function(_0x17e805) {
            _clipboard = _0x17e805;
        });
    else {
        if (_0x1dfc93[_0x563c0e(0x22e)] && _0x1dfc93['which'] == 0x56)
            _clipboard[_0x563c0e(0x226)](function(_0xc6d90f) {
                var _0x4d83ac = _0x563c0e;
                canvas[_0x4d83ac(0x282)](),
                _0xc6d90f['set']({
                    'left': _0xc6d90f[_0x4d83ac(0x20a)] + 0xa,
                    'top': _0xc6d90f[_0x4d83ac(0x215)] + 0xa,
                    'evented': !![]
                }),
                _0xc6d90f['type'] === _0x4d83ac(0x269) ? (_0xc6d90f[_0x4d83ac(0x281)] = canvas,
                _0xc6d90f[_0x4d83ac(0x27c)](function(_0x2b6c09) {
                    var _0x501f43 = _0x4d83ac;
                    canvas[_0x501f43(0x20b)](_0x2b6c09);
                }),
                _0xc6d90f['setCoords']()) : canvas[_0x4d83ac(0x20b)](_0xc6d90f),
                _clipboard['top'] += 0xa,
                _clipboard['left'] += 0xa,
                canvas['setActiveObject'](_0xc6d90f),
                canvas['requestRenderAll']();
            });
        else {
            if (_0x1dfc93[_0x563c0e(0x238)] == 0x2e) {
                var _0x3c4a54 = canvas[_0x563c0e(0x1ee)]();
                _0x3c4a54['type'] === _0x563c0e(0x269) ? _0x3c4a54['forEachObject'](function(_0x51e858) {
                    var _0x22dadf = _0x563c0e;
                    console[_0x22dadf(0x27a)](_0x51e858),
                    canvas['remove'](_0x51e858);
                }) : canvas[_0x563c0e(0x1e2)](_0x3c4a54),
                canvas[_0x563c0e(0x282)](),
                canvas[_0x563c0e(0x268)]();
            } else {
                if (_0x1dfc93['ctrlKey'] && _0x1dfc93[_0x563c0e(0x238)] == 0x5a)
                    canvas[_0x563c0e(0x209)]['length'] > 0x0 && (h[_0x563c0e(0x1f8)](canvas[_0x563c0e(0x209)][_0x563c0e(0x28a)]()),
                    canvas[_0x563c0e(0x1e9)]());
                else {
                    if (_0x1dfc93[_0x563c0e(0x22e)] && _0x1dfc93[_0x563c0e(0x238)] == 0x59)
                        h[_0x563c0e(0x254)] > 0x0 && (isRedoing = !![],
                        canvas['add'](h[_0x563c0e(0x28a)]()));
                    else {
                        if (_0x1dfc93[_0x563c0e(0x224)] && _0x1dfc93[_0x563c0e(0x238)] == 0x47) {
                            if (!canvas[_0x563c0e(0x1ee)]())
                                return;
                            if (canvas['getActiveObject']()[_0x563c0e(0x263)] !== _0x563c0e(0x269))
                                return;
                            canvas[_0x563c0e(0x1ee)]()[_0x563c0e(0x1fe)](),
                            canvas['requestRenderAll']();
                        } else {
                            if (_0x1dfc93[_0x563c0e(0x224)] && _0x1dfc93['which'] == 0x55) {
                                if (!canvas[_0x563c0e(0x1ee)]())
                                    return;
                                if (canvas[_0x563c0e(0x1ee)]()['type'] !== _0x563c0e(0x204))
                                    return;
                                canvas[_0x563c0e(0x1ee)]()[_0x563c0e(0x258)](),
                                canvas['requestRenderAll']();
                            }
                        }
                    }
                }
            }
        }
    }
}
;
