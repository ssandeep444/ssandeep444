function EventRes() {
  return (
    <div
      onClick={() => {
        alert("Div element parent clicked");
      }}
    >
      <button
        onClick={(e) => {
            e.stopPropagation();
          alert("Playing!");
        }}
      >
        Play
      </button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}

export default EventRes;
