controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Plane`, SpriteKind.Enemy)
