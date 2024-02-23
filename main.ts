let mySprite: Sprite = null
for (let index = 0; index < 4; index++) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 5 . . . 
        . . . . . 6 6 6 6 6 6 6 5 5 . . 
        . 5 5 5 . 6 6 6 6 6 6 6 5 5 5 . 
        . . 5 5 5 6 6 6 6 6 6 6 5 8 5 . 
        . . . 5 5 6 6 6 6 6 6 6 5 5 5 5 
        . . 5 5 5 6 6 6 6 6 6 6 5 5 5 5 
        . 5 5 5 . 6 6 6 6 6 6 6 5 5 5 . 
        . . . . . 6 6 6 6 6 6 6 5 5 . . 
        . . . . . . 6 6 6 6 6 6 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.x = randint(0, 120)
    mySprite.vx = randint(10, 60)
    mySprite.setBounceOnWall(true)
    mySprite.y = randint(0, 100)
}
