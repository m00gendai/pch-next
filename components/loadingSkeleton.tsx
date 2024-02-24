import ChapterTitle from "@/components/ChapterTitle";
import LinkContainerLoading from "@/components/LinkContainerLoading";

export default function LoadingSkeleton(){
    return(
        <>
        <ChapterTitle title={`Resultate werden geladen...`} />
        <LinkContainerLoading />
        </>
    )
}