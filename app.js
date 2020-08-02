const app = new PIXI.Application();

document.getElementById("canvas-container").appendChild(app.view);

for (let i = 0; i <= 299; i += 1) {
  app.loader.add(String(i), "./seq/continental-oceanic." + ("000" + i).slice(-4) + ".jpg")
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
