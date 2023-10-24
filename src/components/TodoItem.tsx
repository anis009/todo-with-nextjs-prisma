"use client";
import React from "react";

type TodoItemProps = {
	id: string;
	title: string;
	complete: boolean;
	toggleTodos: (id: string, complete: boolean) => {};
};

const TodoItem = ({ id, title, complete, toggleTodos }: TodoItemProps) => {
	return (
		<li className="flex gap-1 items-center">
			<input
				type="checkbox"
				defaultChecked={complete}
				onChange={(e) => toggleTodos(id, e.target.checked)}
				id={id}
				className="cursor-pointer peer"
			/>
			<label
				htmlFor={id}
				className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
			>
				{title}
			</label>
		</li>
	);
};

export default TodoItem;
