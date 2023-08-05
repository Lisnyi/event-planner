import { theme } from "../styles";
import type { Priority } from "../types";

export function pickPriorityColor(priority: Priority) {
    switch (priority) {
        case 'High':
        return theme.colors.red
      
        case 'Medium':
        return theme.colors.yellow
      
        case 'Low':
        return theme.colors.green
    }
}