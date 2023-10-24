import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const createTodo = async (data: FormData) => {
	"use server";
	const title = data.get("title")?.valueOf();
	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Invalid Title");
	}

	await prisma.todo.create({
		data: {
			title: title,
			complete: false,
		},
	});
	console.log(title);
	redirect("/");
};

const New = async () => {
	return (
		<>
			<header className="flex justify-between bg-gray-200 p-4">
				<h1 className="text-2xl font-bold">Todo</h1>
			</header>
			<form action={createTodo} className="p-4">
				<input
					type="text"
					className="border text-black border-gray-300 rounded-md px-3 py-2 w-full my-2"
					name="title"
					placeholder="Enter your todo title"
				/>
				<div className="flex justify-between">
					<Link
						className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
						href=".."
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default New;
