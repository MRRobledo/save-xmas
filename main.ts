namespace SpriteKind {
    export const present = SpriteKind.create()
    export const hart = SpriteKind.create()
    export const money = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (box == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d f d d f d f . . . 
            . . . . f d d d d d d d f . . . 
            . . . . . f d d f f d d f . . . 
            . . . f f f d d d d d f f f . . 
            . . f d d 2 2 2 2 2 2 2 d d f . 
            . . f d d 2 2 2 f 2 2 2 d d f . 
            . . . f f f 2 2 2 2 2 f f f . . 
            . . . . . f 2 2 f 2 2 f . . . . 
            `)
        info.changeScoreBy(10)
        speed += 3
        number += 1
        myEnemy.follow(mySprite, speed)
        gift()
        box = 0
        if (number % 5 == 0) {
            life()
        }
    }
})
function character () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d f d d f d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . . f d d f f d d f . . . 
        . . . f f f d d d d d f f f . . 
        . . f d d 2 2 2 2 2 2 2 d d f . 
        . . f d d 2 2 2 f 2 2 2 d d f . 
        . . . f f f 2 2 2 2 2 f f f . . 
        . . . . . f 2 2 f 2 2 f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    pause(2000)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.money, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.present, function (sprite, otherSprite) {
    gifts.destroy()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . f d d d d d d d f . . . . . 
        . . f d d f d d f d f . . . . . 
        . . f d d d d d d d f . . . . . 
        . . . f d d f f d d f . . . . . 
        . f f f d d d d d f f f 2 5 2 2 
        f d d 2 2 2 2 2 2 2 d d 2 5 2 2 
        f d d 2 2 2 f 2 2 2 d d 5 5 5 5 
        . f f f 2 2 2 2 2 f f f 2 5 2 2 
        . . . f 2 2 f 2 2 f . . . . . . 
        `)
    box = 1
})
function coin () {
    money = sprites.create(img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `, SpriteKind.money)
    tiles.placeOnRandomTile(money, sprites.castle.tileDarkGrass3)
}
function makeenemy () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, sprites.castle.tileDarkGrass3)
    myEnemy.follow(mySprite, speed)
}
function life () {
    hart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . f f f f . . 
        . f f 2 2 f f . . f f 2 2 f f . 
        f f 2 2 2 2 f f f f 2 2 2 2 f f 
        f 2 2 2 2 2 2 f f 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f 2 2 2 2 2 2 2 2 2 2 f f f 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.hart)
    tiles.placeOnRandomTile(hart, sprites.castle.tileDarkGrass3)
}
function gift () {
    gifts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f 5 5 f f f f f 
        . . f f 2 2 2 2 5 5 2 2 2 2 f f 
        . f f 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 2 2 2 2 2 5 5 2 2 2 f f 5 f 
        . f f f f f 5 5 f f f f f 2 5 f 
        . f 2 2 2 2 5 5 2 2 2 2 f 2 5 f 
        . f 2 2 2 2 5 5 2 2 2 2 f 2 5 f 
        . f 2 2 2 2 5 5 2 2 2 2 f 2 f f 
        . f 2 2 2 2 5 5 2 2 2 2 f f f . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.present)
    tiles.placeOnRandomTile(gifts, sprites.castle.tileDarkGrass3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.hart, function (sprite, otherSprite) {
    hart.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (box == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d f d d f d f . . . 
            . . . . f d d d d d d d f . . . 
            . . . . . f d d f f d d f . . . 
            . . . f f f d d d d d f f f . . 
            . . f d d 2 2 2 2 2 2 2 d d f . 
            . . f d d 2 2 2 f 2 2 2 d d f . 
            . . . f f f 2 2 2 2 2 f f f . . 
            . . . . . f 2 2 f 2 2 f . . . . 
            `)
        pause(2000)
        box = 0
        gift()
    } else {
        info.changeLifeBy(-1)
        mySprite.destroy()
        myEnemy.destroy()
        character()
        makeenemy()
    }
})
let hart: Sprite = null
let money: Sprite = null
let gifts: Sprite = null
let myEnemy: Sprite = null
let number = 0
let mySprite: Sprite = null
let box = 0
let speed = 0
tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020302020101010101010101020504040404020201010101010101010204040202040202020202020201010102020404020402020101010101010101010204040204020201010102020201010202010101010202010101010102010102010101010102020101010201020101020101020101020201010102010202020201010201010202010102020102010102020202010102020101010101020101010101010101020201010101010201010101010101010202010101010102020202020202010102020102010201010101010101010101020201020101010101010101010101010202010202020202020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . . . . . . . . 2 . . . . . 2 
    2 . . . . . . . . 2 . . 2 2 . 2 
    2 2 2 2 2 2 . . . 2 2 . . 2 . 2 
    2 . . . . . . . . . 2 . . 2 . 2 
    2 . . . 2 2 2 . . 2 2 . . . . 2 
    2 . . . . . 2 . . 2 . . . . . 2 
    2 . . . 2 . 2 . . 2 . . 2 . . 2 
    2 . . . 2 . 2 2 2 2 . . 2 . . 2 
    2 . . 2 2 . 2 . . 2 2 2 2 . . 2 
    2 . . . . . 2 . . . . . . . . 2 
    2 . . . . . 2 . . . . . . . . 2 
    2 . . . . . 2 2 2 2 2 2 2 . . 2 
    2 . 2 . 2 . . . . . . . . . . 2 
    2 . 2 . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tilePath5,myTiles.tile2], TileScale.Sixteen))
info.setLife(3)
music.playMelody("C5 B C5 B C5 - - - ", 300)
speed = 10
character()
gift()
makeenemy()
game.onUpdateInterval(20000, function () {
    coin()
})
