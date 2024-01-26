import React, { useState } from "react";
import axios from "axios";
import GeneratedName from "./GeneratedName";

export default function InputForm() {
  let [petType, setPetType] = useState(null);
  let [vibe, setVibe] = useState(null);
  let [name, setName] = useState(null);
  let [ready, setReady] = useState(false);

  function updateSpecies(event) {
    setPetType(event.target.value);
  }

  function updateVibe(event) {
    setVibe(event.target.value);
  }

  function generateName(event) {
    event.preventDefault();

    let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
    let prompt = "Please generate a pet name";
    let context = `You love naming pets funny names that reflect their whole vibe. With a species of ${petType} and an aura with the color (in hex value form) of ${vibe.replace(
      "#",
      "%23"
    )} please generate a name for the pet in basic HTML. Please give only the name in your response and do not give any hex values. The name should be creative based off of the color and pet species provided`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPetName);
  }

  function displayPetName(response) {
    setName(response.data.answer);
    setReady(true);
  }

  return (
    <div className="InputForm">
      <form onSubmit={generateName} className="container">
        <div className="questions">
          <div className="speciesQuestion">
            <label for="pet-species">What kind of pet do you have?</label>
            <div className="input">
              <input
                id="pet-species"
                type="text"
                placeholder="What kind of pet?"
                required
                onChange={updateSpecies}
              />
            </div>
            <p className="instructions">ex: dog, cat, parrot, lizard, rock</p>
          </div>
          <div className="vibe">
            <label for="color-vibe">
              What color best represents your pet's vibe?
            </label>
            <div className="input">
              <input
                type="color"
                id="color-vibe"
                required
                onChange={updateVibe}
              />
            </div>
            <p class="instructions"> Choose a color!</p>
          </div>
        </div>

        <input type="submit" id="submit" value="Submit" />
      </form>
      <GeneratedName name={name} ready={ready} />
    </div>
  );
}
