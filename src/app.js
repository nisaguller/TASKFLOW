const express = require("express");

const app = express();

const PORT = 3000;

const taskRoutes = require("./routes/taskRoutes");

// JSON verilerini okuyabilmek için
app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Ana endpoint
app.get("/", (req, res) => {
    res.json({
        message: "TASKFLOW API çalışıyor!",
        success: true
    });
});

// Task routes
app.use("/api/tasks", taskRoutes);

// Server'ı başlat
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});