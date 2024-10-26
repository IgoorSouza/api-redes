# Sobre o projeto
> Status: Finalizado ✔️
## Funcionalidades de CRUD

### userController

#### GET /users
> Selecionar todos os usuários registrados no banco de dados.
```javascript
app.get("/users", async (request, response) => {
    const users = await getAllUsers();
    response
      .status(users ? 200 : 500)
      .send(users ?? "Error while getting users.");
});
```
<br>

#### GET /users/:id
> Selecionar no banco de dados o usuário que contém o ID informado.
```javascript
app.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await getUserById(id);
    response.status(user ? 200 : 404).send(user ?? "User not found.");
});
```
<br>

#### POST /users
> Criar um novo usuário no banco de dados.
```javascript
app.post("/users", async (request, response) => {
    const user = await createUser(request.body);
    response.status(user ? 201 : 400).send(user ?? "Invalid user data.");
});
```
<br>

#### PUT /users/:id
> Atualizar um usuário existente no banco de dados.
```javascript
app.put("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await updateUser(request.body, id);
    response.status(user ? 200 : 404).send(user ?? "User not found.");
});
```
<br>

#### DELETE /users/:id
> Deletar do banco de dados o usuário que contém o ID informado.
```javascript
app.delete("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await removeUser(id);
    response
      .status(user ? 200 : 404)
      .send(
        user ? `Successfully deleted user with id ${id}` : "User not found."
      );
});
```
<br><br>

### projectController

#### GET /projects
> Selecionar todos os projetos registrados no banco de dados.
```javascript
app.get("/projects", async (request, response) => {
    const projects = await getAllProjects();
    response
      .status(projects ? 200 : 500)
      .send(projects ?? "Error while getting Projects.");
});
```
<br>

#### GET /projects/:id
> Selecionar no banco de dados o projeto que contém o ID informado.
```javascript
app.get("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await getProjectById(id);
    response.status(project ? 200 : 404).send(project ?? "Project not found.");
});
```
<br>

#### POST /projects
> Criar um novo projeto no banco de dados.
```javascript
app.post("/projects", async (request, response) => {
    const project = await createProject(request.body);
    response
      .status(project ? 201 : 400)
      .send(project ?? "Invalid project data.");
});
```
<br>

#### PUT /projects/:id
> Atualizar um projeto existente no banco de dados.
```javascript
app.put("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await updateProject(request.body, id);
    response.status(project ? 200 : 404).send(project ?? "Project not found.");
});
```
<br>

#### DELETE /projects/:id
> Deletar do banco de dados o projeto que contém o ID informado.
```javascript
app.delete("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await removeProject(id);
    response
      .status(project ? 200 : 404)
      .send(
        project
          ? `Successfully deleted project with id ${id}`
          : "Project not found."
      );
});
```
<br><br>

### taskController

#### GET /tasks
> Selecionar todas as tarefas registradas no banco de dados.
```javascript
app.get("/tasks", async (request, response) => {
    const tasks = await getAllTasks();
    response
      .status(tasks ? 200 : 500)
      .send(tasks ?? "Error while getting tasks.");
});
```
<br>

#### GET /tasks/:id
> Selecionar no banco de dados a tarefa que contém o ID informado.
```javascript
app.get("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await getTaskById(id);
    response.status(task ? 200 : 404).send(task ?? "Task not found.");
});
```
<br>

#### POST /tasks
> Criar uma nova tarefa no banco de dados.
```javascript
app.post("/tasks", async (request, response) => {
    const task = await createTask(request.body);
    response.status(task ? 201 : 400).send(task ?? "Invalid Task data.");
});
```
<br>

#### PUT /tasks/:id
> Atualizar uma tarefa existente no banco de dados.
```javascript
app.put("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await updateTask(request.body, id);
    response.status(task ? 200 : 404).send(task ?? "Task not found.");
});
```
<br>

#### DELETE /tasks/:id
> Deletar do banco de dados a tarefa que contém o ID informado.
```javascript
app.delete("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await removeTask(id);
    response
      .status(task ? 200 : 404)
      .send(
        task ? `Successfully deleted task with id ${id}` : "Task not found."
      );
});
```
