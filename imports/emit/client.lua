local TriggerEvent <const>, TriggerServerEvent <const> = TriggerEvent, TriggerServerEvent
local token

local function PlayEvent(_, name, ...)
    TriggerEvent(supv:hashEvent(name), supv.token, ...)
end

supv.emit = setmetatable({}, {
    __call = PlayEvent
})

function supv.emit.net(name, ...)
    if not token then token = supv.callback.sync(joaat('token')) end
    TriggerServerEvent(supv:hashEvent(name, 'server'), token, ...)
end

return supv.emit