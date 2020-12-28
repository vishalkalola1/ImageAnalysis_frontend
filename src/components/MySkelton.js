import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MySkelton({ children, ...rest }) {
    return <SkeletonTheme {...rest}>
        {children}
    </SkeletonTheme>
}