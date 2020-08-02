const app = new PIXI.Application({ backgroundColor: 0x1099bb });

document.getElementById("canvas-container").appendChild(app.view);

const basicText = new PIXI.Text('Loading');
basicText.x = 350;
basicText.y = 270;

app.stage.addChild(basicText);

for (let i = 0; i <= 569; i += 1) {
  app.loader.add(String(i), "./seq/Convergent_Plate_Boundaries_Continental-Continental." + ("000" + i).slice(-4) + ".jpg")
}


app.loader.load((loader, resources) => {
  let index = 0;
  const background = new PIXI.Sprite(resources[index].texture);

  background.x = app.renderer.width / 2;
  background.y = app.renderer.height / 2;

  background.anchor.x = 0.5;
  background.anchor.y = 0.5;

  document.getElementById("input").addEventListener("input", function() {
    background.texture = resources[this.value].texture
  });

  app.stage.addChild(background);
});
