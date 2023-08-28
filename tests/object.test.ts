describe("Object", function () {
  it("should support in typesript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Kevin",
    };

    console.info(person);

    person.id = "2";
    person.name = "Sinaga";

    console.info(person);
  });
});
