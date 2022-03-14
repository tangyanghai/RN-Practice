/**
 * 控制台打印
 * @param tag
 * @param msg
 */
export function useLog(tag?: string,
                       msg?: string) {
    console.log(tag?tag:'===',msg?msg:'')
}
