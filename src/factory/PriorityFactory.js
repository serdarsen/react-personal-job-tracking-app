export const priorities = {
  URGENT: { level: 1, label: "Urgent", classes: "app__priority-urgent" },
  IMPORTANT: {
    level: 2,
    label: "İmportant",
    classes: "app__priority-important",
  },
  NORMAL: { level: 3, label: "Normal", classes: "app__priority-normal" },
};

export const createPriorityOptions = () =>
  Object.keys(priorities).map((priority) => ({
    value: priority,
    label: priorities[priority].label,
  }));

export const defaultPriorityOption = {
  value: "NORMAL",
  label: "Normal",
};
