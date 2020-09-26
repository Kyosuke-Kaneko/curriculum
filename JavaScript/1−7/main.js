class Taiyaki {
  constructor(material) {
    this.material = material;
  }
  bake() {
    console.log(`中身は${this.material}です`);
  }
}
let cream = new Taiyaki('クリーム');
let anko = new Taiyaki('あんこ');
let chease = new Taiyaki('チーズ');
cream.bake();
anko.bake();
chease.bake();