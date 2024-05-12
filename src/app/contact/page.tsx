export default function Contact() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-start p-4">
      <div>
        <h1 className="text-xl font-semibold">Contact</h1>
      </div>

      <div className="w-full max-w-lg flex flex-col items-start justify-center bg-[#dadada] rounded-lg p-3 mt-3 mx-auto">
        <p>
          <span className="font-semibold">Email: </span> email@email.com
        </p>

        <p>
          <span className="font-semibold">Whatsapp: </span>{" "}
          {"+99 (99) 99999-9999"}
        </p>

        <p>
          <span className="font-semibold">Phone: </span> {"+99 (99) 99999-9999"}
        </p>
      </div>
    </div>
  );
}
