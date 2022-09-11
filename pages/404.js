import { useRouter } from "next/router"
import { useEffect } from "react"
const Error = () => {
    const router = useRouter();
  return (
        useEffect(() => {
          router.push("/");
        }, [])
  )
}

export default Error