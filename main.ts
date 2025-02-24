controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`ball throwing`,
    500,
    true
    )
    mySprite.sayText("Throw ball", 2000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walking`,
    200,
    false
    )
    mySprite.sayText("walk", 1000, false)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`stick dude walking`, SpriteKind.Player)
