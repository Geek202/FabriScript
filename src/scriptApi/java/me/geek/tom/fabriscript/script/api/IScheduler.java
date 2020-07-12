package me.geek.tom.fabriscript.script.api;

import jdk.nashorn.api.scripting.ScriptObjectMirror;

/**
 * Allows scripts to request that functions are ran at a later time.
 */
public interface IScheduler {

    /**
     * Schedules a task to be run in a certain number of ticks.
     *
     * @param callback The method to call when the timeout is complete.
     * @param ticks How many ticks to wait before the task is ran.
     * @return A unique ID for this task, potentially used to cancel if wanted.
     */
    String scheduleTask(ScriptObjectMirror callback, int ticks);

}