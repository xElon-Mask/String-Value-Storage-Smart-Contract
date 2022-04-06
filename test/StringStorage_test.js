const StringStorage = artifacts.require("StringStorage");

contract("StringStorage", () => {
  it("Doit nous retourner la valeur de la variable phrase", async () => {
    const stringStorage = await StringStorage.deployed();
    await stringStorage.majPhrase("this");
    const result = await stringStorage.getPhrase();
    assert(result === "this");
  });
});
