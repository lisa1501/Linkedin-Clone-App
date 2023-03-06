import { useState } from "react";

function Form() {
    const [input, setInput] = useState("");
    console.log(input)
    return (
        <form>
            <textarea
                rows="4"
                placeholder="What do you want to talk about?"
                className="bg-transparent focus:outline-none dark:placeholder-white/75"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

export default Form
