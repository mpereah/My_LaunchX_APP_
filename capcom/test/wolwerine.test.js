const Superhero = require("./../app/superhero")
describe("Unit Test for Superhero", () => {
test('Case 1: Get a superhero', () => {
})
});
const ironman = new Superhero ("Iron Man", "Tony Stark", "Robert downey jr")
expect (ironman.name).toBe("Iron Man")
expect (ironman.actor).toBe("Robert downey jr")
expect (ironman.heroName).toBe("Tony Stark")