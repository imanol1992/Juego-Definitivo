class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = "images/gotham_Img.jpg"

        this.posX = 0
        this.posY = 0


    }
    draw() {

        //un solo fondo
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        

    }
}
