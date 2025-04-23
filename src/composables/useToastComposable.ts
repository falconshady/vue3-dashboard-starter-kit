import {ref} from "vue";
import type {ToastPayload} from "@/types/toast.d.ts";

const $timers: { [key: string]: ReturnType<typeof setTimeout> } = {};
const $itemList = ref<ToastPayload[]>([]);
const $duration = 5000
export default function useToastComposable() {
    const $create = (payload: ToastPayload) => {
        $itemList.value.push({
            id: payload.id,
            type: payload.type,
            message: payload.message
        });
        $timers[payload.id] = setTimeout(() => $dismiss(payload.id), $duration);
    }
    const $dismiss = async (id: string) => {
        $itemList.value = $itemList.value.filter((item: ToastPayload) => item.id !== id);
        $removeItem(id)
        $clearTimeout(id);
    }
    const $hasItems = () => {
        return $itemList.value.length > 0;
    }
    const $removeItem = (id: string) => {
        const $el = document.getElementById(id);
        if($el){
            $el.remove()
        }
    }
    const $removeAllItems = () => {
        Object.keys($timers).forEach((id) => {
            const $el = document.getElementById(id);
            if($el){
                $el.remove()
            }
            clearTimeout($timers[id]);
            delete $timers[id];
        });
        
    }
    const $clearTimeout = (id: string) => {
        if ($timers[id]) {
            clearTimeout($timers[id]);
            delete $timers[id];
        }
    }
    const $clearAllTimers = () => {
        Object.keys($timers).forEach((id) => {
            clearTimeout($timers[id]);
            delete $timers[id];
        });
    };

    return {
        $create, $dismiss, $clearAllTimers, $removeItem, $hasItems, $removeAllItems,
        $itemList
    };
}