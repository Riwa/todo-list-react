import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div>
                <h3>Add a task</h3>
                <form>
                    <div>
                        <label htmlFor="task">Task</label>
                        <input type="text" id="task" />
                    </div>
                    <div>
                        <label htmlFor="task-details">Details</label>
                        <textarea type="text" id="task-details"></textarea>
                    </div>
                    <div>
                        <label htmlFor="task-priority">Priority</label>
                        <select>
                            <option>High</option>
                            <option value="selected">Normal</option>
                            <option>Low</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add