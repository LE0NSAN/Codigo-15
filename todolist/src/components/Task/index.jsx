import { Card, Edit } from "../../components";
import { CheckCircleIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

export default function Task ({ task }){
    return(
        <Card className="mt-5 flex justify-between font-semibold">
        <p className="my-auto">{task.id}) {task.text}</p>
        <dir className="flex gap-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
        <Edit task={task} />
        <TrashIcon className="h-6 w-6 text-red-500" />
        </dir>
        </Card>
    );
}