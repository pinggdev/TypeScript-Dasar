describe("Any", function () {
  // sama hal nya seperti javascript, yang dapat merubah data pada sebuah variabel, yang dimana biasanya dalam typescript hal ini dilarang. Tetapi dengan menggunakan any, maka kita bisa merubah data tersebut
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Kevin Sinaga",
      age: 22,
    };

    person.age = 23;
    person.address = "Indonesia";

    console.info(person);
  });
});
