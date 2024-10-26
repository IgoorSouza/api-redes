type Task = {
  id: string;
  name: string;
  description: string;
  priority: string;
  createdAt: Date;
  projectId: string;
  assigneeId: string;
};

export default Task;
