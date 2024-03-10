export default function Input() {
  return (
    <div>
      <label
        htmlFor="City"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        City
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="City"
          id="City"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button class="bg-cyan-400 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}
