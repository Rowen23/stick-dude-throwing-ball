let mySprite = sprites.create(assets.image`stick dude walking`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`walking`,
500,
true
)
