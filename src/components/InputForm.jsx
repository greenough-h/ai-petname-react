export default function InputForm() {
  return (
    <form>
      <div className="species-question">
        <label for="pet-species">What kind of pet do you have?</label>
        <div className="input">
          <input
            id="pet-species"
            type="text"
            placeholder="What kind of pet?"
            required
          />
        </div>
        <p class="instructions">ex: dog, cat, parrot, lizard, rock</p>
      </div>
      <div class="vibe">
        <label for="color-vibe">
          What color best represents your pet's vibe?
        </label>
        <div className="input">
          <input type="color" id="color-vibe" required value="#987CD8" />
        </div>
        <p class="instructions"> Choose a color</p>
      </div>

      <input type="submit" id="submit" value="Submit" />
    </form>
  );
}
