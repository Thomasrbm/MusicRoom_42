import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const placeId = "place-123";

socket.on("connect", () => {
  console.log("connected:", socket.id);

  socket.emit("join-place", placeId);

  setTimeout(() => {
    console.log("leaving place...");

    socket.emit("leave-place", placeId);

    socket.disconnect();
  }, 5000);
});

socket.on("user-join", (data) => {
  console.log("user joined:", data);
});

socket.on("user-leave", (data) => {
  console.log("user left:", data);
});

socket.on("disconnect", () => {
  console.log("disconnected");
});

socket.on("connect_error", (err) => {
  console.log("error:", err.message);
});