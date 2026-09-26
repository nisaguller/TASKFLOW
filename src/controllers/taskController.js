const tasks = require("../data/tasks");

const getTaskById = (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    res.json(task);
};

const getTasks = (req, res) => {
    res.json(tasks);
};

const createTask = (req, res) => {
    const { title, description, status, priority, assignedTo } = req.body;

    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        description,
        status,
        priority,
        assignedTo,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    const { title, description, status, priority, assignedTo } = req.body;

    task.title = title;
    task.description = description;
    task.status = status;
    task.priority = priority;
    task.assignedTo = assignedTo;
    task.updatedAt = new Date();

    res.json(task);
};
const deleteTask = (req, res) => {
    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    const deletedTask = tasks.splice(index, 1)[0];

    res.json({
        message: "Görev başarıyla silindi",
        task: deletedTask
    });
};

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};