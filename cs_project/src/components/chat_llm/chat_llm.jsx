import React from 'react'

function chat_llm() {
  return (
    <form>
        <div class = 'grid gap-6 mb6 md:grid-cols-2'>
            <div>
                <label for = 'name' class = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Chat With LLM</label>
                <input type = 'text' name = 'name' id = 'name' class = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How are you today" required '/>
            </div>
        </div>
    </form>
  )
}

export default chat_llm
