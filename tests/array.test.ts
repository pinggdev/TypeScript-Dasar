describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["kevin", "christ"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    // tidak bisa dilakukan deklarasi atau tidak bisa melakukan perubahan data dikarenakan array nya readonly

    // hobbies[0] = "Main Game";
  });
  // Tupple adalah tipe data Array, yang panjangnya dan juga tipe data nya ditiap index sudah ditentukan, jadi tidak bisa diubah, dikarenakan readonly
  it("should support tupple", function () {
    const person: readonly [string, string, number] = ["Kevin", "Sinaga", 22];

    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = "Sinaga";
  });
});
