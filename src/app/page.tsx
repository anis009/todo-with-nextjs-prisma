import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

async function getTodos() {
	return await prisma.todo.findMany();
}

async function toggleTodos(id: string, complete: boolean) {
	"use server";
	console.log(id, complete);
	await prisma.todo.update({
		where: { id },
		data: {
			complete,
		},
	});
}

const Home = async () => {
	const todos = await getTodos();
	// console.log(todos);
	return (
		<div>
			<header className="flex justify-between">
				<h1>Todo</h1>
				<Link
					href="/new"
					className="bg-green-700 border-2 px-2 py-1 rounded-md "
				>
					New
				</Link>
			</header>
			<ul className="pl-4">
				{todos?.map((todo) => (
					<TodoItem key={todo.id} {...todo} toggleTodos={toggleTodos} />
				))}
			</ul>
			<h1>anis molla</h1>
		</div>
	);
};

export default Home;
